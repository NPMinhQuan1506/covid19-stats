import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import { CountryCode, CountrySummary, Summary } from "../api-types";
import Request from "../Request";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function WorldMap() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [newConfimedMap, setNewConfimedMap] = useState<
    Map<CountryCode, number>
  >(new Map<CountryCode, number>());

  useEffect(() => {
    Request.get("/summary").then((response: AxiosResponse<Summary>) =>
      setSummary(response.data)
    );
  }, []);

  useEffect(() => {
    summary?.Countries.forEach((country: CountrySummary) => {
      setNewConfimedMap(
        (map) => new Map(map.set(country.CountryCode, country.TotalConfirmed))
      );
    });
  }, [summary]);

  return (
    <ComposableMap projectionConfig={{ scale: 147 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            // console.log(
            //   geo.properties.ISO_A2,
            //   newConfimedMap.get(geo.properties.ISO_A2)
            // );
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#000"
                fill={
                  newConfimedMap.get(geo.properties.ISO_A2) !== undefined
                    ? getColorFromNewConfirmed(
                        newConfimedMap.get(geo.properties.ISO_A2)!
                      )
                    : "#f0f0f0"
                }
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}

function getColorFromNewConfirmed(confirmed: number) {
  if (confirmed < 2_000_000) return "#E7E7E7";
  else if (confirmed < 4_000_000) return "#ECE182";
  else if (confirmed < 6_000_000) return "#F9C467";
  else if (confirmed < 8_000_000) return "#FD6A0B";
  else return "#8A1839";
}
