export type TDriver =  {
  name: string;
  car: string,
  experience: number;
  rating: number,
};

export const drivers = (): Array<TDriver> => {

 let list: Array<TDriver> = [
    {
      name: 'Oleksandr',
      car: 'Volvo',
      experience: 3,
      rating: 7,
    },
    {
      name: 'Evgeniy',
      car: 'Mazda',
      experience: 7,
      rating: 2,
    },
    {
      name: 'Shora',
      car: 'Ford',
      experience: 21,
      rating: 8.5,
    },
  ];

 return list;
}
