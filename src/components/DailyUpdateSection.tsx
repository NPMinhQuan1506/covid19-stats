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
          <Box bgcolor="warning.main" padding={2}>
            <Typography variant="h6">
              {summary === null ? "Đang tải..." : summary.Global.NewConfirmed}
            </Typography>
          </Box>
        </FlexBox>
        <FlexBox direction="column" alignItems="center">
          <Typography variant="body1">Tổng</Typography>
          <Box bgcolor="error.main" padding={2}>
            <Typography variant="h6">
              {summary === null ? "Đang tải..." : summary.Global.TotalConfirmed}
            </Typography>
          </Box>
        </FlexBox>
      </FlexBox>

      <Divider />
    </>
  );
}
