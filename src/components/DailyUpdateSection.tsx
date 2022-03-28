import React, { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import FlexBox from "./FlexBox";
import Request from "../Request";
import { Summary } from "../api-types";

export default function DailyUpdateSection() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    Request.get("/summary").then(
      (response: { data: Summary; [key: string]: any }) => {
        setSummary(response.data);
      }
    );
  }, []);

  return (
    <>
      <Divider />

      <FlexBox justifyContent="center">
        <FlexBox direction="column" alignItems="center">
          <Typography variant="body1">Ca mới</Typography>
          <Box bgcolor="#f7f7f7" padding={2}>
            <Typography variant="h6" color="#ff0000">
              {summary === null
                ? "Đang tải..."
                : `+ ${summary.Global.NewConfirmed}`}
            </Typography>
          </Box>
        </FlexBox>
        <FlexBox direction="column" alignItems="center">
          <Typography variant="body1">Tổng</Typography>
          <Box bgcolor="#f3585b" padding={2}>
            <Typography variant="h6" color="#fff">
              {summary === null ? "Đang tải..." : summary.Global.TotalConfirmed}
            </Typography>
          </Box>
        </FlexBox>
      </FlexBox>

      <Divider />
    </>
  );
}
