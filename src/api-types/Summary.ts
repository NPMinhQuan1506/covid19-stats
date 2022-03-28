import { CountrySummary } from ".";

export type Summary = {
  Global: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
  };
  Countries: Array<CountrySummary>;
  Date: Date;
};
