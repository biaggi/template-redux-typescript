export interface PersonType {
  fields: {
    edited: string;
    name: string;
    created: string;
    gender: string;
    skin_color: string;
    hair_color: string;
    height: string;
    eye_color: string;
    mass: string;
    homeworld: string;
    birth_year: string;
    species: string[];
    films: string[];
    vehicles: string[];
    starships: string[];
    url: string;
  };
}

export interface PeopleType {
  count: number;
  pages: number;
  next: string | null;
  previous: string | null;
  results: PersonType[];
}
