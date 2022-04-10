import React, { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import LineChartsContent from "./LineChartsContent";
import { sortBy } from "lodash";
import moment from "moment";
import "moment/locale/vi";
import Request from "../../Request";

export default function LineCharts() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    Request.get(
      `/world?from=2021-01-01T00:00:00&to=${moment().utc(0).format()}`
    ).then((res) => {
      const data = res.data;
      const confirm = sortBy(data, "Date");
      setReport(confirm);
    });
  }, []);

  return (
    <Container style={{ height: "500px", marginTop: 10 }}>
      <LineChartsContent data={report} />
    </Container>
  );
}
