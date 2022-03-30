import { Grid } from "@mui/material";
import Request from "../../Request";
import { Summary } from "../../api-types";
import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import HighlightCard from "./HighlightCard";

export default function Highlight() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    Request.get("/summary").then(
      (response: AxiosResponse<Summary>) => {
        setSummary(response.data);
      }
    );
  }, []);
  const data = [
    {
      title: "Nhiễm *",
      content: summary === null ? "Đang tải..." : summary.Global.TotalConfirmed,
      subContent:
        summary === null ? "Đang tải..." : summary.Global.NewConfirmed,
      type: "confirmed",
    },
    {
      title: "Khỏi",
      content: summary === null ? "Đang tải..." : summary.Global.TotalRecovered,
      subContent:
        summary === null ? "Đang tải..." : summary.Global.NewRecovered,
      type: "recovered",
    },
    {
      title: "Tử vong",
      content: summary === null ? "Đang tải..." : summary.Global.TotalDeaths,
      subContent: summary === null ? "Đang tải..." : summary.Global.NewDeaths,
      type: "deaths",
    },
    {
      title: "Đang điều trị",
      content:
        summary === null
          ? "Đang tải..."
          : summary.Global.TotalConfirmed -
            summary.Global.TotalDeaths -
            summary.Global.TotalRecovered,
      subContent:
        // summary === null
        //   ? "Đang tải..."
        //   : summary.Global.NewConfirmed -
        //     summary.Global.NewDeaths -
        //     summary.Global.NewRecovered
        '',
      type: "treatment",
    },
  ];
  return (
    <Grid container spacing={3} maxWidth={860} style={{margin:'0 auto'}}>
      {data.map((item) => (
        <Grid key={item.type} item sm={3} xs={12} my={2}>
          <HighlightCard
            title={item.title}
            content={item.content}
            subContent={item.subContent}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
