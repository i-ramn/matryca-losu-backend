import { MatrixObject } from './dummyObject';
import { computeSum } from './computeSum';

export const childrenFieldsToReplace = (dateObject: typeof MatrixObject) => {
  console.log('date', dateObject.pe2);
  return [
    {
      name: 'character',
      title: '1. CECHY OSOBOWE',
      subtitle: '1. CHARAKTER',
      number: `${dateObject.e}`,
    },
    {
      name: 'communication',
      title: '1. CECHY OSOBOWE',
      subtitle: '2. DZIECKO W KOMUNIKACJI',
      number: `${dateObject.a}`,
    },
    {
      name: 'awareness',
      title: '1. CECHY OSOBOWE',
      subtitle: '3. SWIADOMOSC DZIECKA',
      number: `${dateObject.b}`,
    },
    {
      name: 'talents',
      title: '2. TALENTY',
      subtitle: '1. TALENTY OD URODZENIA',
      number: `${dateObject.b}`,
    },
    {
      name: 'hidden',
      title: '2. TALENTY',
      subtitle: '2. UKRYTE MOCE',
      number: `${dateObject.b1}`,
    },
    {
      name: 'mensTalents',
      title: '2. TALENTY',
      subtitle: '3. TALENTY NA LINII MESKIEJ',
      number: `${dateObject.f}`,
    },
    {
      name: 'mensTalents2',
      title: '2. TALENTY',
      subtitle: '3. TALENTY NA LINII MESKIEJ',
      number: `${dateObject.h}`,
    },
    {
      name: 'womenTalents',
      title: '2. TALENTY',
      subtitle: '4. TALENTY NA LINII ZENSKIEJ',
      number: `${dateObject.g}`,
    },
    {
      name: 'womenTalents2',
      title: '2. TALENTY',
      subtitle: '4. TALENTY NA LINII ZENSKIEJ',
      number: `${dateObject.i}`,
    },
    {
      name: 'directions',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '1. KIERUNKI ZAINTERESOWAŃ, HOBBY I KOŁEK ZAINTERESOWAŃ ',
      number: `${dateObject.b2}`,
    },
    {
      name: 'directions2',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '1. KIERUNKI ZAINTERESOWAŃ, HOBBY I KOŁEK ZAINTERESOWAŃ ',
      number: `${dateObject.c2}`,
    },
    {
      name: 'directions3',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '1. KIERUNKI ZAINTERESOWAŃ, HOBBY I KOŁEK ZAINTERESOWAŃ ',
      number: `${dateObject.x2}`,
    },
    {
      name: 'actionDirection',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '2. KIERUNEK DZIAŁANIA, OPCJE PRZYSZŁYCH ZAWODÓW',
      number: `${dateObject.c1}`,
    },
    {
      name: 'actionDirection2',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '2. KIERUNEK DZIAŁANIA, OPCJE PRZYSZŁYCH ZAWODÓW',
      number: `${dateObject.x2}`,
    },
    {
      name: 'actionDirection3',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '2. KIERUNEK DZIAŁANIA, OPCJE PRZYSZŁYCH ZAWODÓW',
      number: `${dateObject.x}`,
    },
    {
      name: 'successAchieve',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '3. DO OSIĄGNIĘCIA SUKCESU WAŻNE JEST',
      number: `${dateObject.c}`,
    },
    {
      name: 'successAchieve2',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '3. DO OSIĄGNIĘCIA SUKCESU WAŻNE JEST',
      number: `${dateObject.e}`,
    },
    {
      name: 'successAchieve3',
      title: '3. SAMOREALIZACJA DZIECKA',
      subtitle: '3. DO OSIĄGNIĘCIA SUKCESU WAŻNE JEST',
      number: `${dateObject.a}`,
    },
    {
      name: 'pastIncarnation',
      title: '4. PRZESZLE WCIELENIE ',
      subtitle: 'WCIELENIE',
      number: `${dateObject.d2}-${dateObject.d1}-${dateObject.d}`,
    },
    {
      name: 'soulCameToParents',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '1. DLACZEGO DUSZA DZIECKA PRZYSZŁA DO RODZICÓW',
      number: `${dateObject.a}`,
    },
    {
      name: 'soulCameToParents2',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '1. DLACZEGO DUSZA DZIECKA PRZYSZŁA DO RODZICÓW',
      number: `${dateObject.cc}`,
    },
    {
      name: 'shouldBeTaken',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '2. CO NALEŻY UWZGLĘDNIAĆ W KWESTIACH WYCHOWANIA DZIECKA?',
      number: `${dateObject.a2}`,
    },
    {
      name: 'shouldBeTaken2',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '2. CO NALEŻY UWZGLĘDNIAĆ W KWESTIACH WYCHOWANIA DZIECKA?',
      number: `${dateObject.a1}`,
    },
    {
      name: 'shouldBeTaken3',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '2. CO NALEŻY UWZGLĘDNIAĆ W KWESTIACH WYCHOWANIA DZIECKA?',
      number: `${computeSum(dateObject.a2 + dateObject.b)}`,
    },
    {
      name: 'lessonsByMale',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '3. LEKCJE WEDŁUG LINII MĘSKIEJ',
      number: `${dateObject.f}`,
    },
    {
      name: 'lessonsByMale2',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '3. LEKCJE WEDŁUG LINII MĘSKIEJ',
      number: `${dateObject.h}`,
    },
    {
      name: 'lessonsByFemale',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '4. LEKCJE WEDŁUG LINII ŻEŃSKIEJ',
      number: `${dateObject.g}`,
    },
    {
      name: 'lessonsByFemale2',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '4. LEKCJE WEDŁUG LINII ŻEŃSKIEJ',
      number: `${dateObject.i}`,
    },
    {
      name: 'howToInspire',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '5. JAK INSPIROWAĆ DZIECKO',
      number: `${dateObject.a3}`,
    },
    {
      name: 'howToInspire2',
      title: '5. RELACJE DZIECKO-RODZICIELSKI',
      subtitle: '5. JAK INSPIROWAĆ DZIECKO',
      number: `${dateObject.b3}`,
    },
    {
      name: '0',
      title: '6. PROGNOZA NA LATA',
      subtitle: '0-5 LAT',
      number: `${dateObject.a}`,
    },
    {
      name: '1',
      title: '6. PROGNOZA NA LATA',
      subtitle: '0-5 LAT',
      number: `${dateObject.ya}`,
    },
    {
      name: '2',
      title: '6. PROGNOZA NA LATA',
      subtitle: '0-5 LAT',
      number: `${dateObject.ya1}`,
    },
    {
      name: '3',
      title: '6. PROGNOZA NA LATA',
      subtitle: '0-5 LAT',
      number: `${dateObject.ya2}`,
    },
    {
      name: '5',
      title: '6. PROGNOZA NA LATA',
      subtitle: '0-5 LAT',
      number: `${dateObject.ya3}`,
    },
    {
      name: '6',
      title: '6. PROGNOZA NA LATA',
      subtitle: '6-7,5 - 10 LAT',
      number: `${dateObject.ya4}`,
    },
    {
      name: '7',
      title: '6. PROGNOZA NA LATA',
      subtitle: '6-7,5 - 10 LAT',
      number: `${dateObject.ya5}`,
    },
    {
      name: '8',
      title: '6. PROGNOZA NA LATA',
      subtitle: '6-7,5 - 10 LAT',
      number: `${dateObject.ya6}`,
    },
    {
      name: '10',
      title: '6. PROGNOZA NA LATA',
      subtitle: '6-7,5 - 10 LAT',
      number: `${dateObject.f}`,
    },
    {
      name: '11',
      title: '6. PROGNOZA NA LATA',
      subtitle: '11-12,5 - 15 LAT',
      number: `${dateObject.yf}`,
    },
    {
      name: '12',
      title: '6. PROGNOZA NA LATA',
      subtitle: '11-12,5 - 15 LAT',
      number: `${dateObject.yf1}`,
    },
    {
      name: '13',
      title: '6. PROGNOZA NA LATA',
      subtitle: '11-12,5 - 15 LAT',
      number: `${dateObject.yf2}`,
    },
    {
      name: '15',
      title: '6. PROGNOZA NA LATA',
      subtitle: '11-12,5 - 15 LAT',
      number: `${dateObject.yf3}`,
    },
    {
      name: 'recommendations',
      title: '7. REKOMENDACJE DLA RODZICOW',
      subtitle: 'DLA RODZICOW',
      number: `${dateObject.a}`,
    },
    {
      name: 'recommendations2',
      title: '7. REKOMENDACJE DLA RODZICOW',
      subtitle: 'DLA RODZICOW',
      number: `${dateObject.b}`,
    },
    {
      name: 'recommendations3',
      title: '7. REKOMENDACJE DLA RODZICOW',
      subtitle: 'DLA RODZICOW',
      number: `${computeSum(dateObject.a2 + dateObject.a3)}`,
    },
  ];
};
