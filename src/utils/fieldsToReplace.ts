import { MatrixObject } from './dummyObject';
import { computeSum } from './computeSum';

export const fieldsToReplace = (dateObject: typeof MatrixObject) => {
  return [
    {
      name: 'day',
      title: '1.CECHY OSOBOWE (1-2-5)',
      subtitle: '1.WIZYTÓWKA(1)',
      number: dateObject.a.toString(),
    },
    {
      name: 'month',
      title: '1.CECHY OSOBOWE (1-2-5)',
      subtitle: '2.ŚWIADOMOŚĆ(2)',
      number: dateObject.b.toString(),
    },
    {
      name: 'character',
      title: '1.CECHY OSOBOWE (1-2-5)',
      subtitle: '3.CHARAKTER (5)',
      number: dateObject.e.toString(),
    },
    {
      name: 'talents',
      title: '2. TALENTY',
      subtitle: '1. ŹRÓDŁO ŻYCIOWEJ ENERGII(2) ',
      number: dateObject.b.toString(),
    },
    {
      name: 'hidden',
      title: '2. TALENTY',
      subtitle:
        '2. UKRYTE MOCE(14) To są umiejętności nadane przez wszechświat jako bonus. Trzeba rozwijać.',
      number: dateObject.b1.toString(),
    },
    {
      name: 'skillsAndAbilities',
      title: '2. TALENTY',
      subtitle:
        '3. UMIEJĘTNOŚCI I ZDOLNOŚCI Z PRZESZŁEGO ŻYCIA (13) To są umiejętności i zdolności zgromadzone z poprzednich wcieleń które masz.',
      number: dateObject.b2.toString(),
    },
    {
      name: 'personalDestiny',
      title: '3. PRZEZNACZENIA',
      subtitle: '1. OSOBISTE PRZEZNACZENIE (20 -40 LAT)',
      number: dateObject.pe.toString(),
    },
    {
      name: 'socialDestiny',
      title: '3. PRZEZNACZENIA',
      subtitle: '2. SOCJALNE PRZEZNACZENIE (40 - 60 LAT)',
      number: dateObject.pe1.toString(),
    },
    {
      name: 'spiritualDestiny',
      title: '3. PRZEZNACZENIA',
      subtitle: '3. DUCHOWE PRZEZNACZENIE (60 - 80 LAT)',
      number: dateObject.pe2.toString(),
    },
    {
      name: 'spiritualDestiny',
      title: '3. PRZEZNACZENIA',
      subtitle: '3. DUCHOWE PRZEZNACZENIE (60 - 80 LAT)',
      number: dateObject.pe2.toString(),
    },
    {
      name: 'sexuality',
      title: '4. SEKSUALNOŚĆ ',
      subtitle: '5-10-32',
      number: `${dateObject.e}-${dateObject.e1}-${dateObject.e2}`,
    },
    {
      name: 'perfectPartner',
      title: '5. MIŁOŚĆ',
      subtitle: '1. IDEALNY PARTNER - 17',
      number: `${dateObject.x1}`,
    },
    {
      name: 'relationshipTask',
      title: '5. MIŁOŚĆ',
      subtitle: '2. ZADANIA KARMICZNE W ZWIĄZKU - 11',
      number: `${dateObject.d2}`,
    },
    {
      name: 'loveAndFinancesBalance',
      title: '6. BALANCE MIĘDZY MIŁOŚCIĄ A FINANSAMI',
      subtitle: 'BALANCE',
      number: `${dateObject.x}`,
    },
    {
      name: 'financeKarma',
      title: '7. FINANSE',
      subtitle: '1. KARMA FINANSOWA - 3',
      number: `${dateObject.c}`,
    },
    {
      name: 'experiencesFromPastIncarnations',
      title: '7. FINANSE',
      subtitle: '2. DOŚWIADCZENIA Z PRZESZŁYCH WCIELEŃ - 19',
      number: `${dateObject.c1}`,
    },
    {
      name: 'financialFlowBlock',
      title: '7. FINANSE',
      subtitle: '3. CO BLOKUJE PRZEPŁYW FINANSOWY - 15',
      number: `${dateObject.c2}`,
    },
    {
      name: 'occupation',
      title: '7. FINANSE',
      subtitle: '4. ZAWÓD - 18',
      number: `${dateObject.x2}`,
    },
    {
      name: 'karmicTail',
      title: '8. OGON KARMICZNY ',
      subtitle: '(4-12-11)',
      number: `${dateObject.d2}-${dateObject.d1}-${dateObject.d}`,
    },
    {
      name: 'soulCameToParents',
      title: 'KARMA DZIECKO-RODZICIELSKA (1-21-20)',
      subtitle: '1. DLACZEGO TWOJA DUSZA PRZYSZŁA DO RODZICÓW (1)',
      number: `${dateObject.a}`,
    },
    {
      name: 'childrenPlaceInLife',
      title: 'KARMA DZIECKO-RODZICIELSKA (1-21-20)',
      subtitle: '2. MIEJSCE DZIECI W ŻYCIU CZŁOWIEKA (21)',
      number: `${dateObject.a1}`,
    },
    {
      name: 'parentsPlaceInLife',
      title: 'KARMA DZIECKO-RODZICIELSKA (1-21-20)',
      subtitle: '3. MIEJSCE RODZICÓW W ŻYCIU CZŁOWIEKA (20)',
      number: `${dateObject.a2}`,
    },
    {
      name: 'parentsKarmicTask',
      title: 'PROGRAMY RODOWE NA LINII MĘSKIEJ',
      subtitle: '1. ZADANIE KARMICZNE OD PRZODKÓW (6-8)',
      number: `${dateObject.f}`,
    },
    {
      name: 'parentsKarmicTaskSecond',
      title: 'PROGRAMY RODOWE NA LINII MĘSKIEJ',
      subtitle: '1. ZADANIE KARMICZNE OD PRZODKÓW (6-8)',
      number: `${dateObject.h}`,
    },
    {
      name: 'presentTime',
      title: 'PROGRAMY RODOWE NA LINII MĘSKIEJ',
      subtitle: '2. CZAS OBECNY (23-25)',
      number: `${dateObject.f1}`,
    },
    {
      name: 'presentTimeSecond',
      title: 'PROGRAMY RODOWE NA LINII MĘSKIEJ',
      subtitle: '2. CZAS OBECNY (23-25)',
      number: `${dateObject.h1}`,
    },
    {
      name: 'howToCompleteKarmicTask',
      title: 'PROGRAMY RODOWE NA LINII MĘSKIEJ',
      subtitle: '3. JAK PRZEPRACOWAĆ NEGATYWNĄ ENERGIĘ (22-24)',
      number: `${dateObject.f2}`,
    },
    {
      name: 'howToCompleteKarmicTaskSecond',
      title: 'PROGRAMY RODOWE NA LINII MĘSKIEJ',
      subtitle: '3. JAK PRZEPRACOWAĆ NEGATYWNĄ ENERGIĘ (22-24)',
      number: `${dateObject.h2}`,
    },
    {
      name: 'femaleParentsKarmicTask',
      title: 'PROGRAMY RODOWE NA LINII ŻEŃSKIEJ',
      subtitle: '1. ZADANIE KARMICZNE OD PRZODKÓW (7-9)',
      number: `${dateObject.g}`,
    },
    {
      name: 'femaleParentsKarmicTaskSecond',
      title: 'PROGRAMY RODOWE NA LINII ŻEŃSKIEJ',
      subtitle: '1. ZADANIE KARMICZNE OD PRZODKÓW (7-9)',
      number: `${dateObject.i}`,
    },
    {
      name: 'femalePresentTime',
      title: 'PROGRAMY RODOWE NA LINII ŻEŃSKIEJ',
      subtitle: '2. CZAS OBECNY (27-29)',
      number: `${dateObject.g1}`,
    },
    {
      name: 'femalePresentTimeSecond',
      title: 'PROGRAMY RODOWE NA LINII ŻEŃSKIEJ',
      subtitle: '2. CZAS OBECNY (27-29)',
      number: `${dateObject.i1}`,
    },
    {
      name: 'femaleHowToCompleteKarmicTask',
      title: 'PROGRAMY RODOWE NA LINII ŻEŃSKIEJ',
      subtitle: '3. JAK PRZEPRACOWAĆ KARMICZNE ZADANIE (26-28)',
      number: `${dateObject.g2}`,
    },
    {
      name: 'femaleHowToCompleteKarmicTaskSecond',
      title: 'PROGRAMY RODOWE NA LINII ŻEŃSKIEJ',
      subtitle: '3. JAK PRZEPRACOWAĆ KARMICZNE ZADANIE (26-28)',
      number: `${dateObject.i2}`,
    },
    {
      name: 'inspirationFind',
      title: '10. MARZENIA',
      subtitle: '1. SKĄD MOŻEMY SZUKAĆ INSPIRACJI - 30',
      number: `${dateObject.cd}`,
    },
    {
      name: 'heartDesire',
      title: '10. MARZENIA',
      subtitle: '2. PRAGNIENIE SERCA - 31',
      number: `${dateObject.cd1}`,
    },
    {
      name: 'generalPhysics',
      title: 'OGÓLNY UKŁAD SYSTEMÓW ',
      subtitle: '1. FIZYKA',
      number: `${dateObject.ch}`,
    },
    {
      name: 'generalEnergy',
      title: 'OGÓLNY UKŁAD SYSTEMÓW ',
      subtitle: '2. ENERGIA',
      number: `${dateObject.ch1}`,
    },
    {
      name: 'generalEmotion',
      title: 'OGÓLNY UKŁAD SYSTEMÓW ',
      subtitle: '3. EMOCJA',
      number: `${dateObject.ch2}`,
    },
    {
      name: 'muladharaPhysics',
      title: '1. MULADHARA',
      subtitle: '1. FIZYKA',
      number: `${dateObject.c}`,
    },
    {
      name: 'muladharaEnergy',
      title: '1. MULADHARA',
      subtitle: '2. ENERGIA',
      number: `${dateObject.d}`,
    },
    {
      name: 'muladharaEmotion',
      title: '1. MULADHARA',
      subtitle: '3. EMOCJA',
      number: `${dateObject.cg2}`,
    },
    {
      name: 'swadhistanaPhysics',
      title: '2. SWADHISTHANA',
      subtitle: '1. FIZYKA',
      number: `${dateObject.c2}`,
    },
    {
      name: 'swadhistanaEnergy',
      title: '2. SWADHISTHANA',
      subtitle: '2. ENERGIA',
      number: `${dateObject.d2}`,
    },
    {
      name: 'swadhistanaEmotion',
      title: '2. SWADHISTHANA',
      subtitle: '3. EMOCJA',
      number: `${dateObject.cf2}`,
    },
    {
      name: 'manipuraPhysics',
      title: '3. MANIPURA',
      subtitle: '1. FIZYKA',
      number: `${dateObject.e}`,
    },
    {
      name: 'manipuraEnergy',
      title: '3. MANIPURA',
      subtitle: '2. ENERGIA',
      number: `${dateObject.e}`,
    },
    {
      name: 'manipuraEmotion',
      title: '3. MANIPURA',
      subtitle: '3. EMOCJA',
      number: `${dateObject.ce2}`,
    },
    {
      name: 'anahataPhysics',
      title: '4. ANAHATA',
      subtitle: '1. FIZYKA',
      number: `${dateObject.a3}`,
    },
    {
      name: 'anahataEnergy',
      title: '4. ANAHATA',
      subtitle: '2. ENERGIA',
      number: `${dateObject.b3}`,
    },
    {
      name: 'anahataEmotion',
      title: '4. ANAHATA',
      subtitle: '3. EMOCJA',
      number: `${computeSum(dateObject.a3 + dateObject.b3)}`,
    },
    {
      name: 'wiszudhaPhysics',
      title: '5. WISZUDHA',
      subtitle: '1. FIZYKA',
      number: `${dateObject.cc}`,
    },
    {
      name: 'wiszudhaEnergy',
      title: '5. WISZUDHA',
      subtitle: '2. ENERGIA',
      number: `${dateObject.cc1}`,
    },
    {
      name: 'wiszudhaEmotion',
      title: '5. WISZUDHA',
      subtitle: '3. EMOCJA',
      number: `${dateObject.cc2}`,
    },
    {
      name: 'ajnaPhysics',
      title: '6. AJNA',
      subtitle: '1. FIZYKA',
      number: `${dateObject.a1}`,
    },
    {
      name: 'ajnaEnergy',
      title: '6. AJNA',
      subtitle: '2. ENERGIA',
      number: `${dateObject.b1}`,
    },
    {
      name: 'ajnaEmotion',
      title: '6. AJNA',
      subtitle: '3. EMOCJA',
      number: `${dateObject.cb2}`,
    },
    {
      name: 'sahasraraPhysics',
      title: '7. SAHASRARA',
      subtitle: '1. FIZYKA',
      number: `${dateObject.ca}`,
    },
    {
      name: 'sahasraraEnergy',
      title: '7. SAHASRARA',
      subtitle: '2. ENERGIA',
      number: `${dateObject.ca1}`,
    },
    {
      name: 'sahasraraEmotion',
      title: '7. SAHASRARA',
      subtitle: '3. EMOCJA',
      number: `${dateObject.ca2}`,
    },
    {
      name: '16',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yf4}`,
    },
    {
      name: '17',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yf5}`,
    },
    {
      name: '18',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yf6}`,
    },
    {
      name: '20',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.ca1}`,
    },
    {
      name: '21',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yb}`,
    },
    {
      name: '22',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yb1}`,
    },
    {
      name: '23',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yb2}`,
    },
    {
      name: '25',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yb3}`,
    },
    {
      name: '26',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yb4}`,
    },
    {
      name: '27',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yb5}`,
    },
    {
      name: '28',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.yb6}`,
    },
    {
      name: '30',
      title: '12. LATA',
      subtitle: '16-17,5 LAT - 30 LAT',
      number: `${dateObject.g}`,
    },
    {
      name: '31',
      title: '12. LATA',
      subtitle: '31-32,5 LAT - 40 LAT',
      number: `${dateObject.yg}`,
    },
    {
      name: '32',
      title: '12. LATA',
      subtitle: '31-32,5 LAT - 40 LAT',
      number: `${dateObject.yg1}`,
    },
    {
      name: '33',
      title: '12. LATA',
      subtitle: '31-32,5 LAT - 40 LAT',
      number: `${dateObject.yg2}`,
    },
    {
      name: '35',
      title: '12. LATA',
      subtitle: '31-32,5 LAT - 40 LAT',
      number: `${dateObject.yg3}`,
    },
    {
      name: '36',
      title: '12. LATA',
      subtitle: '31-32,5 LAT - 40 LAT',
      number: `${dateObject.yg4}`,
    },
    {
      name: '37',
      title: '12. LATA',
      subtitle: '31-32,5 LAT - 40 LAT',
      number: `${dateObject.yg5}`,
    },
    {
      name: '38',
      title: '12. LATA',
      subtitle: '31-32,5 LAT - 40 LAT',
      number: `${dateObject.yg6}`,
    },
    {
      name: '40',
      title: '12. LATA',
      subtitle: '31-32,5 LAT - 40 LAT',
      number: `${dateObject.c}`,
    },
    {
      name: '41',
      title: '12. LATA',
      subtitle: '41-42,5 LAT - 50 LAT',
      number: `${dateObject.yc}`,
    },
    {
      name: '42',
      title: '12. LATA',
      subtitle: '41-42,5 LAT - 50 LAT',
      number: `${dateObject.yc1}`,
    },
    {
      name: '43',
      title: '12. LATA',
      subtitle: '41-42,5 LAT - 50 LAT',
      number: `${dateObject.yc2}`,
    },
    {
      name: '45',
      title: '12. LATA',
      subtitle: '41-42,5 LAT - 50 LAT',
      number: `${dateObject.yc3}`,
    },
    {
      name: '46',
      title: '12. LATA',
      subtitle: '41-42,5 LAT - 50 LAT',
      number: `${dateObject.yc4}`,
    },
    {
      name: '47',
      title: '12. LATA',
      subtitle: '41-42,5 LAT - 50 LAT',
      number: `${dateObject.yc5}`,
    },
    {
      name: '48',
      title: '12. LATA',
      subtitle: '41-42,5 LAT - 50 LAT',
      number: `${dateObject.yc6}`,
    },
    {
      name: '50',
      title: '12. LATA',
      subtitle: '41-42,5 LAT - 50 LAT',
      number: `${dateObject.h}`,
    },
    {
      name: '51',
      title: '12. LATA',
      subtitle: '51-52,5 LAT -60 LAT',
      number: `${dateObject.yh}`,
    },
    {
      name: '52',
      title: '12. LATA',
      subtitle: '51-52,5 LAT -60 LAT',
      number: `${dateObject.yh1}`,
    },
    {
      name: '53',
      title: '12. LATA',
      subtitle: '51-52,5 LAT -60 LAT',
      number: `${dateObject.yh2}`,
    },
    {
      name: '55',
      title: '12. LATA',
      subtitle: '51-52,5 LAT -60 LAT',
      number: `${dateObject.yh3}`,
    },
    {
      name: '56',
      title: '12. LATA',
      subtitle: '51-52,5 LAT -60 LAT',
      number: `${dateObject.yh4}`,
    },
    {
      name: '57',
      title: '12. LATA',
      subtitle: '51-52,5 LAT -60 LAT',
      number: `${dateObject.yh5}`,
    },
    {
      name: '58',
      title: '12. LATA',
      subtitle: '51-52,5 LAT -60 LAT',
      number: `${dateObject.yh6}`,
    },
    {
      name: '60',
      title: '12. LATA',
      subtitle: '51-52,5 LAT -60 LAT',
      number: `${dateObject.d}`,
    },
    {
      name: '61',
      title: '12. LATA',
      subtitle: '61-62,5 LAT -70 LAT',
      number: `${dateObject.yd}`,
    },
    {
      name: '62',
      title: '12. LATA',
      subtitle: '61-62,5 LAT -70 LAT',
      number: `${dateObject.yd1}`,
    },
    {
      name: '63',
      title: '12. LATA',
      subtitle: '61-62,5 LAT -70 LAT',
      number: `${dateObject.yd2}`,
    },
    {
      name: '65',
      title: '12. LATA',
      subtitle: '61-62,5 LAT -70 LAT',
      number: `${dateObject.yd3}`,
    },
    {
      name: '66',
      title: '12. LATA',
      subtitle: '61-62,5 LAT -70 LAT',
      number: `${dateObject.yd4}`,
    },
    {
      name: '67',
      title: '12. LATA',
      subtitle: '61-62,5 LAT -70 LAT',
      number: `${dateObject.yd5}`,
    },
    {
      name: '68',
      title: '12. LATA',
      subtitle: '61-62,5 LAT -70 LAT',
      number: `${dateObject.yd6}`,
    },
    {
      name: '70',
      title: '12. LATA',
      subtitle: '61-62,5 LAT -70 LAT',
      number: `${dateObject.pb1}`,
    },
    {
      name: '71',
      title: '12. LATA',
      subtitle: '71-72,5 LAT - 80 LAT',
      number: `${dateObject.yi}`,
    },
    {
      name: '72',
      title: '12. LATA',
      subtitle: '71-72,5 LAT - 80 LAT',
      number: `${dateObject.yi1}`,
    },
    {
      name: '73',
      title: '12. LATA',
      subtitle: '71-72,5 LAT - 80 LAT',
      number: `${dateObject.yi2}`,
    },
    {
      name: '75',
      title: '12. LATA',
      subtitle: '71-72,5 LAT - 80 LAT',
      number: `${dateObject.yi3}`,
    },
    {
      name: '76',
      title: '12. LATA',
      subtitle: '71-72,5 LAT - 80 LAT',
      number: `${dateObject.yi4}`,
    },
    {
      name: '77',
      title: '12. LATA',
      subtitle: '71-72,5 LAT - 80 LAT',
      number: `${dateObject.yi5}`,
    },
    {
      name: '78',
      title: '12. LATA',
      subtitle: '71-72,5 LAT - 80 LAT',
      number: `${dateObject.yi6}`,
    },
    {
      name: 'recommendationsFirst',
      title: '13. REKOMENDACJA ',
      subtitle: '(1-2-5)',
      number: `${dateObject.a}`,
    },
    {
      name: 'recommendationsSecond',
      title: '13. REKOMENDACJA ',
      subtitle: '(1-2-5)',
      number: `${dateObject.b}`,
    },
    {
      name: 'recommendationsThird',
      title: '13. REKOMENDACJA ',
      subtitle: '(1-2-5)',
      number: `${dateObject.e}`,
    },
  ];
};
