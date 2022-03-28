import { Box } from "@mui/material";
import React from "react";

type Props = {
  direction?: "row" /* default */ | "column";
  justifyContent?:
    | "flex-start" /* default */
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "stretch" /* default */
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline";
  children: any;
};

export default function FlexBox(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: props.direction ?? "row",
        justifyContent: props.justifyContent ?? "flex-start",
        alignItems: props.alignItems ?? "stretch",
      }}
    >
      {props.children}
    </Box>
  );
}
