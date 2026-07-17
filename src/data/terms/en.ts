import type { TermsDisclaimer, TermsVariant } from '@/types'
import { Language } from '@/types'

export const TERMS_DISCLAIMER_EN: TermsDisclaimer = {
  title: 'Courtesy translation',
  body: 'This English text is a courtesy translation of the original Dutch "Algemene Voorwaarden" of The Makers Barn. In the event of any discrepancy or dispute, the Dutch version is the legally binding text.',
}

export const TERMS_EN: TermsVariant = {
  lang: Language.EN,
  documentTitle: 'General Terms and Conditions of Rental',
  subtitle:
    'The Makers Barn — General terms and conditions for organisers and facilitators',
  identity: [
    { label: 'Location name', value: 'The Makers Barn' },
    { label: 'Management', value: 'The Makers Barn B.V.' },
    { label: 'Operator', value: 'JambalayaTMB' },
    { label: 'Chamber of Commerce (KvK) number', value: '42017220' },
    { label: 'Address', value: 'Duisterendijk 2, 8131RA Wijhe' },
  ],
  introTitle: 'Introduction & Identity',
  introParagraphs: [
    'These general terms and conditions apply to all agreements relating to the rental and use of the group accommodation and grounds of The Makers Barn. The Makers Barn is managed by The Makers Barn B.V. and operated by the business JambalayaTMB, located at Duisterendijk 2, 8131RA Wijhe, registered in the trade register of the Dutch Chamber of Commerce under number 42017220.',
    'As the location is commonly known in the market and to the public as "The Makers Barn", these names are used interchangeably in this document. The legal contracting party with whom the agreement is concluded is at all times JambalayaTMB.',
  ],
  articles: [
    {
      title: 'Article 1: Applicability and Amendments',
      clauses: [
        {
          text: 'These general terms and conditions apply to every quotation, offer and agreement between JambalayaTMB (hereinafter: "The Makers Barn") and the contracting party renting the location (hereinafter: the "Contractor").',
        },
        {
          text: 'These terms and conditions apply specifically to Contractors who rent the accommodation in their capacity as organiser and/or facilitator for a retreat, workshop, training or group gathering organised by them.',
        },
        {
          text: 'Provisions or conditions set by the Contractor that deviate from, or do not appear in, these general terms and conditions are binding on The Makers Barn only if and insofar as they have been expressly accepted in writing in advance.',
        },
        {
          text: 'The Makers Barn reserves the right to amend or supplement these general terms and conditions. Amendments will be communicated to the Contractor in writing or electronically.',
        },
        {
          text: 'Amendments take effect on the date stated in the notification and also apply to agreements already in progress. If an amendment constitutes a substantial change that is materially to the disadvantage of the Contractor, the Contractor has the right to dissolve the agreement free of charge up to the effective date of the amendment. This right of dissolution does not apply if the amendment arises directly from mandatory government measures.',
        },
      ],
    },
    {
      title: 'Article 2: Definitions',
      intro: 'In these terms and conditions, the following definitions apply:',
      definitions: [
        {
          term: 'The Makers Barn / Operator',
          description:
            'JambalayaTMB, located at Duisterendijk 2, 8131RA Wijhe, registered under Chamber of Commerce (KvK) number 42017220.',
        },
        {
          term: 'Contractor',
          description:
            'The natural person or legal entity entering into the agreement with The Makers Barn to rent the location for the purpose of offering their own programme (as organiser/facilitator).',
        },
        {
          term: 'Group / Group Members',
          description:
            'The entirety of individuals (participants, guests, trainers, assistants and other persons admitted by the Contractor) who, under the agreement, have the right to stay on the grounds and in the accommodation.',
        },
        {
          term: 'Accommodation',
          description:
            'All or part of the buildings, rooms, facilities, inventory and the surrounding outdoor grounds of The Makers Barn.',
        },
        {
          term: 'Agreed price',
          description:
            'The total fee payable for the rental of the accommodation, as recorded in the written agreement or invoice.',
        },
        {
          term: 'Cancellation',
          description:
            'The written or electronic termination of the agreement by the Contractor before the start date of the stay.',
        },
      ],
    },
    {
      title: 'Article 3: Option and Reservation',
      clauses: [
        {
          text: 'An option on the accommodation requested in writing or by e-mail is valid for a maximum of 5 days, after which it lapses by operation of law without any further notice or reminder from The Makers Barn being required.',
        },
        {
          text: 'The option is only definitively converted into a binding reservation once the down payment of € 250 (the "reserve the dates" fee) has been received in full by The Makers Barn.',
        },
        {
          text: 'Until this first down payment has been made, The Makers Barn reserves the full right to release the dates for other requests if the payment term has expired.',
        },
      ],
    },
    {
      title: 'Article 4: Payment Terms and Instalments',
      clauses: [
        {
          text: 'Payment of the agreed price is made in fixed instalments according to the following schedule:',
          items: [
            'Instalment 1 (immediately upon reservation): € 250 reservation fee to definitively secure the dates.',
            'Instalment 2 (3 months before the start): payment of the agreed base amount.',
            'Instalment 3 (1 week after the end): additional payment or final settlement based on the actual number of participants, additional services, extra consumption, any damage compensation or extra cleaning costs if the location has been left in an unreasonable state.',
          ],
        },
        {
          text: 'If the Contractor, despite a prior written reminder, fails to meet their payment obligation within the set term, they are in default by operation of law. The Makers Barn then has the right to terminate the agreement with immediate effect, with the cancellation conditions remaining fully in force.',
        },
        {
          text: 'If, on the day of arrival, The Makers Barn has not received the amounts due up to that point (Instalment 1 and Instalment 2), it is entitled to deny the Contractor and the Group access to the grounds.',
        },
      ],
    },
    {
      title: 'Article 5: Cancellation and Changes by the Contractor',
      clauses: [
        {
          text: 'Cancellation of the agreement must at all times be made in writing or by e-mail.',
        },
        {
          text: 'The initial down payment of € 250 ("reserve the dates") is non-refundable under any circumstances and serves to cover reservation and administration costs.',
        },
        {
          text: 'Change arrangement (1 to 3 months before the start): if the Contractor cancels the booking or wishes to reschedule it within the period of 1 to 3 months before the planned start date, a one-time opportunity is offered to move the booking to another available date within 12 months of the original date. For this one-time rescheduling, a fixed change fee of € 250 per reserved night of the planned event is payable (for example, € 500 for a 2-night event).',
        },
        {
          text: 'Cancellation less than one month before the start: if the Contractor cancels or reschedules the booking less than 1 month before the start date, the option to reschedule lapses and the Contractor owes a cancellation fee of 100% of the agreed base price.',
        },
      ],
      table: {
        columns: [
          'Time of cancellation / change',
          'Fee payable / consequences',
        ],
        rows: [
          [
            'Immediately after booking (during option/reservation)',
            'The reservation fee of € 250 is retained and is non-refundable.',
          ],
          [
            'Between 1 and 3 months before the start',
            'A one-time rescheduling of the date is permitted against payment of a fixed fee of € 250 per reserved night.',
          ],
          [
            'Less than 1 month before the start',
            'No rescheduling or refund possible. 100% of the agreed base price is payable.',
          ],
        ],
      },
    },
    {
      title: 'Article 6: Use of the Location and Facilities',
      clauses: [
        {
          text: 'The facilities and the accommodation must be used with the greatest possible care and in accordance with any instructions. Damage caused by careless or improper use is entirely at the expense of the Contractor.',
        },
        {
          text: 'The Contractor bears full responsibility for the behaviour and actions of all group members throughout the entire stay on the grounds.',
        },
        {
          text: 'Facilities: the grounds of The Makers Barn feature specific facilities available to the group, namely: a sauna, sweat lodge, fire pit, barbecue (BBQ) and a swimming pond (open water).',
        },
        {
          text: 'Swimming pond: the swimming pond is a natural body of open water. There is no lifeguard or supervision present. Use of the swimming pond is entirely and exclusively at the own risk of the Contractor and the Group Members.',
        },
        {
          text: 'Availability of facilities: The Makers Barn strives to offer all facilities (including the swimming pond, sauna, fire pit and other supporting amenities) in good working and safe condition at all times. If certain supporting facilities are temporarily unavailable or must be closed due to unforeseen circumstances, maintenance or safety considerations, The Makers Barn reserves the right to close them without this giving rise to any right to a refund, discount or compensation for the Contractor.',
        },
        {
          text: 'Force majeure: The Makers Barn reserves the right, in response to extreme weather forecasts, force majeure or other unforeseen circumstances, to make adjustments to the programme on the grounds or the use of the facilities, or to cancel the event in its entirety. In the event of such a cancellation, The Makers Barn is not obliged to pay any damages or compensation. In the first instance, a suitable rescheduling of the event to a new date will be sought. If rescheduling proves impossible, only the rent already paid will be refunded, less any expenses already incurred by The Makers Barn.',
        },
      ],
      callout: {
        title: 'Important rule regarding the swimming pond',
        body: 'If children or minors are present on the grounds, the parents or legal guardians must at all times bear full responsibility and provide active supervision themselves. The Makers Barn excludes any form of liability for accidents, injury or drowning in or around the swimming pond.',
      },
    },
    {
      title: "Article 7: High-Risk Activities and the Organiser's Responsibility",
      clauses: [
        {
          text: 'Elevated risk: for activities with an elevated risk taking place on the grounds or in the facilities of The Makers Barn — expressly including, but not limited to, organising a sweat lodge session, intensive breathwork, ice baths or other intense physical, mental or spiritual rituals — the Contractor is obliged to fully inform The Makers Barn in advance and to obtain explicit approval.',
        },
        {
          text: "Organiser's responsibility: the Contractor (in the capacity of organiser and facilitator), as well as the specific person actually leading or organising the activity, bears full, exclusive and joint and several responsibility for its safe, competent and responsible execution.",
        },
        {
          text: 'Screening and guidance: the organiser/facilitator must ensure adequate screening of participants (for any contraindications) and professional, safe guidance throughout the process.',
        },
        {
          text: 'Liability: The Makers Barn merely makes the location available and accepts no liability whatsoever for physical, psychological or material damage, injury or incidents arising from these activities. The Contractor fully indemnifies The Makers Barn (JambalayaTMB) against all claims from third parties and group members in this regard.',
        },
      ],
    },
    {
      title: "Article 8: Contractor's Obligations and House Rules",
      clauses: [
        {
          text: 'The Contractor has the strict obligation to comply with the agreement, the general terms and conditions and the specific house rules of The Makers Barn. The Contractor ensures that all group members and third parties engaged by them also strictly comply with these.',
        },
        {
          text: 'The Contractor is required to provide The Makers Barn, no later than on the day of arrival, with an accurate list of the names of all group members and attendees.',
        },
        {
          text: 'The Contractor and group members are not permitted to make substantial alterations to the grounds surrounding the accommodation without the prior written consent of the Operator.',
        },
        {
          text: 'At the end of the agreed period, the Contractor leaves the accommodation and the grounds broom-clean and in their original state.',
        },
        {
          text: 'Cleaning costs in case of inadequate handover: if the accommodation or the grounds are not left in the required clean state after departure and The Makers Barn is forced to carry out additional cleaning work taking more than 20 hours, the full costs of these additional hours will be recovered in full and retrospectively from the Contractor (organiser).',
        },
      ],
    },
    {
      title: 'Article 9: Early Termination and Eviction',
      clauses: [
        {
          text: 'The Makers Barn may terminate the agreement with immediate effect and demand that the location be vacated if:',
          items: [
            'The Contractor and/or the group members fail to comply, or fail to comply properly, with the obligations under the agreement, the terms and conditions or the house rules, despite a prior warning;',
            'The Contractor and/or the group members cause serious nuisance to The Makers Barn, local residents or the surrounding area;',
            'The use of the accommodation conflicts with the designated purpose of the grounds.',
          ],
        },
        {
          text: 'After termination, the Contractor must ensure that the accommodation is vacated immediately and that the Group has left the grounds. In this case, the Contractor remains obliged to pay the full agreed price, without any right to a refund.',
        },
      ],
    },
    {
      title: 'Article 10: Liability and Force Majeure',
      clauses: [
        {
          text: 'Limitation of liability: the statutory liability of JambalayaTMB (The Makers Barn) for material damage or financial loss is limited to the statutory/insurance-based maximum per event for which The Makers Barn is adequately insured.',
        },
        {
          text: 'The Makers Barn is not liable for accidents, theft, loss of or damage to goods on its grounds, unless this is the direct result of intent or gross negligence on the part of The Makers Barn.',
        },
        {
          text: 'Force majeure: The Makers Barn is not liable for the consequences of extreme weather conditions, failures in utility services beyond its control, or other forms of force majeure, without prejudice to the provisions of Article 6.6.',
        },
        {
          text: 'The Contractor is fully and jointly and severally liable towards The Makers Barn for all damage caused, or yet to be caused, by the acts or omissions of the Contractor, the group members or third parties invited by them.',
        },
      ],
    },
    {
      title: 'Article 11: Applicable Law and Disputes',
      clauses: [
        {
          text: 'All legal relationships between JambalayaTMB (The Makers Barn) and the Contractor are governed exclusively by Dutch law.',
        },
        {
          text: 'All disputes connected with or arising from this agreement will in the first instance be submitted exclusively to the competent court in the district in which The Makers Barn is located.',
        },
      ],
    },
  ],
}
