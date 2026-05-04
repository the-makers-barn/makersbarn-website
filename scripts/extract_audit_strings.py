#!/usr/bin/env python3
"""Extract every EN translation string from the four audit data files into a
stable JSON manifest. Each unique string gets a numeric id; the manifest
preserves source-file context so the copywriter agents can read each string
in its surrounding sentence flow.

Inputs:  src/data/tools/mistakeAudit{Labels,Questions,Variants,Content}.ts
Output:  /tmp/audit_strings.json
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

# Helper-call patterns: sameAcrossLocales(...), en(...), t(...)
# The arg may sit on the same line or be wrapped across two lines (the call
# itself spans multiple lines but the string literal is always single-line).
# DOTALL so \s* matches newlines between the paren and the literal.
HELPERS = ("sameAcrossLocales", "en", "t")
PATTERNS = [
    re.compile(rf"\b{h}\(\s*'((?:[^'\\\n]|\\.)*)'\s*[,)]", re.DOTALL)
    for h in HELPERS
] + [
    re.compile(rf'\b{h}\(\s*"((?:[^"\\\n]|\\.)*)"\s*[,)]', re.DOTALL)
    for h in HELPERS
]

def extract():
    seen = {}
    next_id = 1
    for f in FILES:
        text = f.read_text()
        for pat in PATTERNS:
            for m in pat.finditer(text):
                s = m.group(1)
                val = s.replace("\\'", "'").replace('\\"', '"').replace("\\\\", "\\")
                if val in seen:
                    continue
                # Compute line by counting newlines up to match start
                line_no = text.count("\n", 0, m.start()) + 1
                seen[val] = {
                    "id": f"S{next_id:03d}",
                    "source_file": f.name,
                    "source_line": line_no,
                    "en": val,
                }
                next_id += 1
    return list(seen.values())

def main():
    items = extract()
    out = REPO / "tmp" / "audit_strings.json"
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(items, indent=2, ensure_ascii=False))
    print(f"Extracted {len(items)} unique strings -> {out}")

if __name__ == "__main__":
    main()
