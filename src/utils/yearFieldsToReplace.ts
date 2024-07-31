import { MatrixObject } from './dummyObject';

export const yearFieldsToReplace = (dateObject: typeof MatrixObject) => {
  return [
    {
      name: 'day',
      title: '1.CECHY OSOBOWE (1-2-5)',
      subtitle: '1.WIZYTÓWKA(1)',
      number: dateObject.a.toString(),
    },
  ];
};
