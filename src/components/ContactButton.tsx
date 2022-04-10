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
  borderColor: "#1d2a8c",
  color: "#696cd9",
  backgroundColor: "#e9ecf9",
  "&:hover": {
    color: "#e9ecf9",
    backgroundColor: "#696cd9",
  },
}));

export default function ContactButton({ ...props }) {
  return (
    <ColorButton variant="contained" {...props}>
      {props.children}
    </ColorButton>
  );
}
