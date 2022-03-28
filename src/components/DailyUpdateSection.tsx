import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import FlexBox from "./FlexBox";

export default function DailyUpdateSection() {
  return (
    <>
      <Divider />

      <FlexBox justifyContent="center">
        <FlexBox direction="column" alignItems="center">
          <Typography variant="body1">Ca mới</Typography>
          <Box bgcolor="warning.main" padding={2}>
            <Typography variant="h6">1.000.000</Typography>
          </Box>
        </FlexBox>
        <FlexBox direction="column" alignItems="center">
          <Typography variant="body1">Tổng</Typography>
          <Box bgcolor="error.main" padding={2}>
            <Typography variant="h6">1.000.000</Typography>
          </Box>
        </FlexBox>
      </FlexBox>

      <Divider />
    </>
  );
}
