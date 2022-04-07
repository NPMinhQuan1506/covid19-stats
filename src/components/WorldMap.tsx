import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import { Summary } from "../api-types";
import Request from "../Request";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function WorldMap() {
  const [, setSummary] = useState<Summary | null>(null);

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
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
