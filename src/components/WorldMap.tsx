import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import { CountryCode, CountrySummary, Summary } from "../api-types";
import Request from "../Request";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function WorldMap() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    Request.get("/summary").then((response: AxiosResponse<Summary>) =>
      setSummary(response.data)
    );
  }, []);

  return (
    <ComposableMap projectionConfig={{ scale: 147 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={
                summary
                  ? getTotalConfirmedCaseColor(geo.properties.ISO_A2)
                  : "#fff"
              }
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );

  function getTotalConfirmedCaseColor(countryCodeToFind: CountryCode) {
    const countrySummary: CountrySummary | undefined = summary!.Countries.find(
      (countrySummary: CountrySummary) =>
        countrySummary.CountryCode === countryCodeToFind
    );

    if (countrySummary === undefined) return "#f1f1f1";
    else calculateHeatColorFromTotalConfirmed(countrySummary.TotalConfirmed);
  }

  function calculateHeatColorFromTotalConfirmed(totalConfirmed: number) {
    const below2Mils = "#e7e7e7e";
    const from2MilsTo4Mils = "#ECE182";
    const from4MilsTo6Mils = "#F9C467";
    const from6MilsTo8Mils = "#FD6A0B";
    const above8Mils = "#8A1839";

    if (totalConfirmed < 2_000_000) return below2Mils;
    if (totalConfirmed < 4_000_000) return from2MilsTo4Mils;
    if (totalConfirmed < 6_000_000) return from4MilsTo6Mils;
    if (totalConfirmed < 8_000_000) return from6MilsTo8Mils;
    return above8Mils;
  }
}
