import { Country, CountryCode } from ".";

export type CountrySummary = {
  Country: Country;
  CountryCode: CountryCode;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: Date;
};
