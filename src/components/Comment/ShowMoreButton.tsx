import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: "40px",
  lineHeight: "38px",
  borderRadius: "4px",
  width: "100px",
  fontSize: "15px",
  fontWeight: 700,
  borderColor: "#8c1d3c",
  color: "#d96989",
  backgroundColor: "#f9e9ee",
  "&:hover": {
    color: "#f9e9ee",
    backgroundColor: "#d96989",
  },
}));

export default function ShowMoreButton({ ...props }) {
  return (
    <ColorButton variant="contained" {...props}>
      {props.children}
    </ColorButton>
  );
}
