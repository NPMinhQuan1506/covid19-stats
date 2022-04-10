import React, { useEffect, useState } from "react";
import { Divider, Container, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
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
  const [selectedValue, setSelectedValue] = useState("total");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <Container style={{ height: "500px", marginTop: 20, marginBottom: 30 }}>
      <Divider />
      <div style={{width: "250px",
      marginTop: 10,
    borderRadius: "58px",
    background: "#e6eaef",
    boxShadow: "inset 12px 12px 24px #bfc2c6, inset -12px -12px 24px #ffffff",}}>
        <Radio
          {...controlProps("total")}
          sx={{
            color: "#5456AD",
            "&.Mui-checked": {
              color: "#3A3C79",
            },
          }}
          label="Tổng số ca"
        />
        <Typography component="span">Tổng số ca</Typography>
        <Radio
          {...controlProps("new")}
          sx={{
            color: "#5456AD",
            "&.Mui-checked": {
              color: "#3A3C79",
            },
          }}
          label="Số ca mới"
        />
        <Typography component="span">Số ca mới</Typography>
      </div>
      <LineChartsContent data={report} dataType={selectedValue}/>
    </Container>
  );
}
