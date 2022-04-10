import React, { useEffect, useState, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { Button, ButtonGroup, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const inactiveTheme = createTheme({
  palette: { primary: { main: "#3A3C79" } },
});
const activeTheme = createTheme({ palette: { primary: { main: "#5456AD" } } });

const generateOptions = (data, subTitle, dataType) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));
  let titleData = []
  if(dataType === "total"){
    titleData.push("Tổng ca nhiễm", "Tổng ca hồi phục", "Tổng ca tử vong", "Tổng ca điều trị")
  }
  else if (dataType === "new"){
    titleData.push("Số ca nhiễm mới", "Số ca hồi phục mới", "Số ca tử vong mới", "Số ca điều trị mới")
  }
  const  dataFilter = data.map((item) => {
    console.log(dataType)
    if (dataType === "total") {
      return {
        Confirmed: item.TotalConfirmed,

        Recovered: item.TotalRecovered,

        Deaths: item.TotalDeaths,
        Treatment:
          item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths,
      };
    } else if (dataType === "new") {
      return {
        Confirmed: item.NewConfirmed,

        Recovered: item.NewRecovered,

        Deaths: item.NewDeaths,

        Treatment:
          item.NewConfirmed - item.NewRecovered - item.NewDeaths,
      };
    }
  });
  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Biểu đồ thống kê dữ liệu covid-19",
    },
    subtitle: {
      text: subTitle,
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#FF392B", "#056625", "#222", "#e18425"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: titleData[0],
        data: dataFilter.map((item)=>item.Confirmed),
      },
      {
        name:titleData[1],
        data: dataFilter.map((item)=>item.Recovered),
      },
      {
        name: titleData[2],
        data: dataFilter.map((item)=>item.Deaths),
      },
      {
        name: titleData[3],
        data: dataFilter.map((item)=>item.Treatment),
      },
    ],
  };
};

export default function LineChartsContent({ data, dataType }) {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState("all");
  useEffect(() => {
    let customData = [];
    switch (reportType) {
      case "all":
        customData = data;
        break;
      case "30":
        customData = data.slice(Math.max(data.length - 30, 1));
        break;
      case "7":
        customData = data.slice(Math.max(data.length - 7, 1));
        break;

      default:
        customData = data;
        break;
    }
    let subTitle = "Dữ liệu thống kê từ đầu năm 2021";
    if (reportType !== "all") {
      subTitle = "Dữ liệu thống kê trong " + reportType + " gần nhất";
    }
    setOptions(generateOptions(customData, subTitle, dataType));
  }, [data, reportType, dataType]);

  return (
    <Box>
      <ButtonGroup
        size="small"
        aria-label="small outlined button group"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ThemeProvider
          theme={reportType === "all" ? activeTheme : inactiveTheme}
        >
          <Button
            variant={reportType === "all" ? "contained" : "outlined"}
            onClick={() => setReportType("all")}
          >
            Tất cả
          </Button>
        </ThemeProvider>
        <ThemeProvider
          theme={reportType === "30" ? activeTheme : inactiveTheme}
        >
          <Button
            variant={reportType === "30" ? "contained" : "outlined"}
            onClick={() => setReportType("30")}
          >
            30 ngày
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={reportType === "7" ? activeTheme : inactiveTheme}>
          <Button
            variant={reportType === "7" ? "contained" : "outlined"}
            onClick={() => setReportType("7")}
          >
            7 ngày
          </Button>
        </ThemeProvider>
      </ButtonGroup>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}
