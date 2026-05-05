#!/usr/bin/env python3
"""Apply NL + DE translations from copywriter-agent output back into the
audit data files.

Inputs:
  tmp/audit_strings.json   — the manifest produced by extract_audit_strings.py
  tmp/audit_nl.json        — { "<id>": "<NL translation>" }
  tmp/audit_de.json        — { "<id>": "<DE translation>" }

Behaviour: rewrites every `sameAcrossLocales('X')`, `en('X')`, `t('X')`
single-line OR wrapped-across-two-lines call into a single-line
`localized('X', 'NL', 'DE')` call. Adds a `localized` helper to each
file (next to the existing one), and removes the now-unused old helper
when it has no remaining callers.
"""
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
FILES = [
    REPO / "src/data/tools/mistakeAuditLabels.ts",
    REPO / "src/data/tools/mistakeAuditQuestions.ts",
    REPO / "src/data/tools/mistakeAuditVariants.ts",
    REPO / "src/data/tools/mistakeAuditContent.ts",
]

HELPERS = ("sameAcrossLocales", "en", "t")

def js_escape_single(s: str) -> str:
    """Escape a string for use inside a JS single-quoted literal."""
    return s.replace("\\", "\\\\").replace("'", "\\'")

def build_pattern(helper: str) -> re.Pattern:
    # Match  helper(  'X'  )  or  helper(  "X"  )
    # where the call may be multi-line and the literal may be followed by a
    # trailing comma before the close paren.
    body = (
        r"\(\s*"
        r"(?:'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\")"
        r"\s*,?\s*\)"
    )
    return re.compile(rf"\b{helper}{body}", re.DOTALL)

def js_unescape(s: str) -> str:
    return s.replace("\\'", "'").replace('\\"', '"').replace("\\\\", "\\")

def replace_calls(text: str, en_to_nl_de: dict) -> tuple[str, int]:
    """Replace every helper(literal) call with localized(en, nl, de)."""
    replacements = 0
    for helper in HELPERS:
        pattern = build_pattern(helper)
        def sub(m: re.Match) -> str:
            raw = m.group(1) if m.group(1) is not None else m.group(2)
            en = js_unescape(raw)
            tr = en_to_nl_de.get(en)
            if tr is None:
                return m.group(0)  # unknown — leave alone
            nonlocal replacements
            replacements += 1
            return (
                f"localized("
                f"'{js_escape_single(en)}', "
                f"'{js_escape_single(tr['nl'])}', "
                f"'{js_escape_single(tr['de'])}'"
                f")"
            )
        text = pattern.sub(sub, text)
    return text, replacements

LOCALIZED_HELPER_BLOCK = (
    "\n// Translation helper — emitted by scripts/apply_audit_translations.py.\n"
    "const localized = (en: string, nl: string, de: string): LocalizedString => ({\n"
    "  [Language.EN]: en,\n"
    "  [Language.NL]: nl,\n"
    "  [Language.DE]: de,\n"
    "})\n"
)

def insert_helper(text: str) -> str:
    """Insert the localized() helper after the last import block, if not already present."""
    if "const localized = (" in text:
        return text
    # Place it right before the first definition (after imports). Simple:
    # find the last `import ... from ...` line, insert after.
    import_re = re.compile(r"^import .+? from .+?$", re.MULTILINE)
    matches = list(import_re.finditer(text))
    if not matches:
        return LOCALIZED_HELPER_BLOCK + text
    last = matches[-1]
    insert_at = text.find("\n", last.end()) + 1
    return text[:insert_at] + LOCALIZED_HELPER_BLOCK + text[insert_at:]

def main():
    strings = json.loads((REPO / "tmp/audit_strings.json").read_text())
    nl = json.loads((REPO / "tmp/audit_nl.json").read_text())
    de = json.loads((REPO / "tmp/audit_de.json").read_text())

    en_to_nl_de = {}
    missing_nl, missing_de = [], []
    for entry in strings:
        sid = entry["id"]
        if sid not in nl:
            missing_nl.append(sid)
            continue
        if sid not in de:
            missing_de.append(sid)
            continue
        en_to_nl_de[entry["en"]] = {"nl": nl[sid], "de": de[sid]}

    if missing_nl or missing_de:
        print(f"WARNING: missing NL: {len(missing_nl)}, missing DE: {len(missing_de)}")
        print("First missing NL:", missing_nl[:5])
        print("First missing DE:", missing_de[:5])

    total_replacements = 0
    for f in FILES:
        text = f.read_text()
        text = insert_helper(text)
        new_text, n = replace_calls(text, en_to_nl_de)
        if n:
            f.write_text(new_text)
            total_replacements += n
            print(f"  {f.name}: {n} replacements")
    print(f"Total replacements: {total_replacements}")

if __name__ == "__main__":
    sys.exit(main())
