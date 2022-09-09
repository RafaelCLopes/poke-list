export interface ENTER {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
      type: string;
    },
  ];
}

export interface EXIT {
  next: string;
  results: EXITITEM[];
}

export class EXITITEM {

  id: number;
  name: string;
  url: string;
  image: string;
  type: string;

}
