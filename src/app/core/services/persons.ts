export interface Person {
    order?: number;
    first: string;
    last: string;
    email: string;
    address: string;  
  }
  
  export const PERSONS: Person[] = [
    {
      first: "Sara",
      last: "Cremin",
      email: "Everette.Cremin@brody.org",
      address: "2830 Adan Courts",    
      order: 1
    },
    {
      first: "Rosie",
      last: "Monahan",
      email: "Rosie.Monahan@van.net",
      address: "01602 Jacobi Manor",    
      order: 2
    },
    {
      first: "Braeden",
      last: "Roob",
      email: "Braeden.Roob@bartholome.info",
      address: "8682 Rosalia Squares",    
      order: 3
    },
    {
      first: "Parvin",
      last: "Khoshnaz",
      email: "lavendergiraffe57@gmail.com",
      address: "10939 Williamson Highway",    
      order: 4
    },
    {
      first: "Christ",
      last: "Goodwin",
      email: "Christ.Goodwin@tod.info",
      address: "814 Prohaska Roads",    
      order: 5
    },
    {
      first: "Nash",
      last: "Cormier",
      email: "Nash.Cormier@ryann.name",
      address: "84047 Elbert Rapid",    
      order: 6
    }
  ];
  