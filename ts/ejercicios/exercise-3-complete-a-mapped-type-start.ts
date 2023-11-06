type CountryData = {
  name: string;
  languages: string[];
  population: number;
};

type Descriptions<Type> = {
  [Property in keyof Type]: string;
};

const countryDataDescriptions: Descriptions<CountryData> = {
  name: "The name of the country.",
  languages: "The languages spoken in the country.",
  population: "The population of the country.",
};

export {};
