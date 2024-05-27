import { compatibilityObject } from './dummyObject';

interface FieldsToReplace {
  name: string;
  title: string;
  subtitle: string;
  number: string;
}

export const compatibilityFieldsToReplace = (
  dateObject: typeof compatibilityObject,
): FieldsToReplace[] => {
  return [
    {
      name: 'area',
      title: '1 CHARAKTERYSTYKA PARY',
      subtitle: '1. STREFA KOMFORTU PARY',
      number: `${dateObject.e}`,
    },
    {
      name: 'manBehaviour',
      title: '1 CHARAKTERYSTYKA PARY',
      subtitle: '2. ZACHOWANIE MĘŻCZYZNY ',
      number: `${dateObject.f}`,
    },
    {
      name: 'womanBehaviour',
      title: '1 CHARAKTERYSTYKA PARY',
      subtitle: '3. ZACHOWANIE KOBIETY ',
      number: `${dateObject.g}`,
    },
    {
      name: 'missingAsAMan',
      title: '1 CHARAKTERYSTYKA PARY',
      subtitle: '4. CZEGO BRAKUJE W CHARAKTERZE MĘŻCZYZNY ',
      number: `${dateObject.h}`,
    },
    {
      name: 'missingAsAWoman',
      title: '1 CHARAKTERYSTYKA PARY',
      subtitle: '5. CZEGO BRAKUJE W CHARAKTERZE KOBIETY ',
      number: `${dateObject.i}`,
    },
    {
      name: 'howPeopleSee',
      title: '1 CHARAKTERYSTYKA PARY',
      subtitle: '6. JAK LUDZIE WAS WIDZĄ ',
      number: `${dateObject.a}`,
    },
    {
      name: 'whereInPreviousLife',
      title: '1 CHARAKTERYSTYKA PARY',
      subtitle: '7. KIM BYLIŚCIE DLA SIEBIE W POPRZEDNIM ŻYCIU ',
      number: `${dateObject.d}`,
    },
    {
      name: 'relations',
      title: '2 ZASOBY PARY ',
      subtitle: '8. RELACJE PARY',
      number: `${dateObject.j}`,
    },
    {
      name: 'whyMeet',
      title: '2 ZASOBY PARY ',
      subtitle: '9. PO CO SIĘ SPOTKALIŚCIE ',
      number: `${dateObject.a}`,
    },
    {
      name: 'whyMeet2',
      title: '2 ZASOBY PARY ',
      subtitle: '9. PO CO SIĘ SPOTKALIŚCIE ',
      number: `${dateObject.b}`,
    },
    {
      name: 'howCoupleManifest',
      title: '2 ZASOBY PARY ',
      subtitle: '10.JAK PARA SIĘ MANIFESTUJE ',
      number: `${dateObject.a}`,
    },
    {
      name: 'howCoupleManifest2',
      title: '2 ZASOBY PARY ',
      subtitle: '10.JAK PARA SIĘ MANIFESTUJE ',
      number: `${dateObject.b}`,
    },
    {
      name: 'howCoupleManifest3',
      title: '2 ZASOBY PARY ',
      subtitle: '10.JAK PARA SIĘ MANIFESTUJE ',
      number: `${dateObject.e}`,
    },
    {
      name: 'inspiration',
      title: '2 ZASOBY PARY ',
      subtitle: '11. CO INSPIRUJE PARĘ ',
      number: `${dateObject.b}`,
    },
    {
      name: 'houseHold',
      title: '2 ZASOBY PARY ',
      subtitle: '12. JAK PARA BĘDZIE PROWADZIĆ GOSPODARSTWO DOMOWE ',
      number: `${dateObject.b2}`,
    },
    {
      name: 'howToMakeMoney',
      title: '3 FINANSE',
      subtitle: '13. CO ROBIĆ WSPÓLNIE, ABY BYŁY PIENIĄDZE ',
      number: `${dateObject.x2}`,
    },
    {
      name: 'financeWeakness',
      title: '3 FINANSE',
      subtitle: '14. SŁABE PUNKTY W FINANSACH ',
      number: `${dateObject.c2}`,
    },
    {
      name: 'financeWeakness2',
      title: '3 FINANSE',
      subtitle: '14. SŁABE PUNKTY W FINANSACH ',
      number: `${dateObject.c1}`,
    },
    {
      name: 'financeWeakness3',
      title: '3 FINANSE',
      subtitle: '14. SŁABE PUNKTY W FINANSACH ',
      number: `${dateObject.c}`,
    },
    {
      name: 'problems',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '15. PROBLEMY I TRUDNOŚCI ',
      number: `${dateObject.d2}`,
    },
    {
      name: 'problems2',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '15. PROBLEMY I TRUDNOŚCI ',
      number: `${dateObject.d1}`,
    },
    {
      name: 'problems3',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '15. PROBLEMY I TRUDNOŚCI ',
      number: `${dateObject.d}`,
    },
    {
      name: 'problems4',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '15. PROBLEMY I TRUDNOŚCI ',
      number: `${dateObject.c2}`,
    },
    {
      name: 'problems5',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '15. PROBLEMY I TRUDNOŚCI ',
      number: `${dateObject.c1}`,
    },
    {
      name: 'problems6',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '15. PROBLEMY I TRUDNOŚCI ',
      number: `${dateObject.c}`,
    },
    {
      name: 'whatIsMissing',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '16. CZEGO BRAKUJE PARZE ',
      number: `${dateObject.x}`,
    },
    {
      name: 'whatCausesProblems',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '17. CO POWODUJE PROBLEMY ',
      number: `${dateObject.d}`,
    },
    {
      name: 'whatCausesProblems2',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '17. CO POWODUJE PROBLEMY ',
      number: `${dateObject.c2}`,
    },
    {
      name: 'whatCausesProblems3',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '17. CO POWODUJE PROBLEMY ',
      number: `${dateObject.c1}`,
    },
    {
      name: 'whatCausesProblems4',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '17. CO POWODUJE PROBLEMY ',
      number: `${dateObject.c}`,
    },
    {
      name: 'separation',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle: '18.MOŻLIWA PRZYCZYNA ZERWANIA',
      number: `${dateObject.b1}`,
    },
    {
      name: 'negativeKarma',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle:
        '19. JEŚLI PARA NIE SPEŁNIA TEGO, DO CZEGO SIĘ SPOTKAŁA, WŁĄCZA SIĘ NEGATYWNA KARMA ',
      number: `${dateObject.d2}`,
    },
    {
      name: 'negativeKarma2',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle:
        '19. JEŚLI PARA NIE SPEŁNIA TEGO, DO CZEGO SIĘ SPOTKAŁA, WŁĄCZA SIĘ NEGATYWNA KARMA ',
      number: `${dateObject.d1}`,
    },
    {
      name: 'negativeKarma3',
      title: '4. MOŻLIWE PROBLEMY ',
      subtitle:
        '19. JEŚLI PARA NIE SPEŁNIA TEGO, DO CZEGO SIĘ SPOTKAŁA, WŁĄCZA SIĘ NEGATYWNA KARMA ',
      number: `${dateObject.d}`,
    },
    {
      name: 'matchingTask',
      title: '5 ZADANIA',
      subtitle: '20. ZADANIA PARY DLA "DOPASOWANIA" W RELACJACH ',
      number: `${dateObject.j1}`,
    },
    {
      name: 'implementationTask',
      title: '5 ZADANIA',
      subtitle: '21. ZADANIA PARY DO SKUTECZNEJ REALIZACJI W SPOŁECZEŃSTWIE',
      number: `${dateObject.j2}`,
    },
    {
      name: 'children',
      title: '6 RODZINA',
      subtitle: '22. WASZE DZIECI',
      number: `${dateObject.a1}`,
    },
    {
      name: 'parents',
      title: '6 RODZINA',
      subtitle: '23. WY JAKO RODZICE ',
      number: `${dateObject.a2}`,
    },
    {
      name: 'financeRecommendation',
      title: '7 REKOMENDACJE ',
      subtitle:
        '24. DLA FINANSOWEGO DOBROBYTU I SZCZĘŚLIWYCH RELACJI WAŻNE JEST',
      number: `${dateObject.c2}`,
    },
    {
      name: 'financeRecommendation2',
      title: '7 REKOMENDACJE ',
      subtitle:
        '24. DLA FINANSOWEGO DOBROBYTU I SZCZĘŚLIWYCH RELACJI WAŻNE JEST',
      number: `${dateObject.x2}`,
    },
    {
      name: 'financeRecommendation3',
      title: '7 REKOMENDACJE ',
      subtitle:
        '24. DLA FINANSOWEGO DOBROBYTU I SZCZĘŚLIWYCH RELACJI WAŻNE JEST',
      number: `${dateObject.x1}`,
    },
    {
      name: 'financeRecommendation4',
      title: '7 REKOMENDACJE ',
      subtitle:
        '24. DLA FINANSOWEGO DOBROBYTU I SZCZĘŚLIWYCH RELACJI WAŻNE JEST',
      number: `${dateObject.x}`,
    },
    {
      name: 'financeRecommendation5',
      title: '7 REKOMENDACJE ',
      subtitle:
        '24. DLA FINANSOWEGO DOBROBYTU I SZCZĘŚLIWYCH RELACJI WAŻNE JEST',
      number: `${dateObject.d2}`,
    },
    {
      name: 'coupleRecommendation',
      title: '7 REKOMENDACJE ',
      subtitle: '25.REKOMENDACJE DLA PARY',
      number: `${dateObject.a}`,
    },
    {
      name: 'coupleRecommendation2',
      title: '7 REKOMENDACJE ',
      subtitle: '25.REKOMENDACJE DLA PARY',
      number: `${dateObject.b}`,
    },
    {
      name: 'coupleRecommendation3',
      title: '7 REKOMENDACJE ',
      subtitle: '25.REKOMENDACJE DLA PARY',
      number: `${dateObject.e}`,
    },
  ];
};
