import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  width: "100px",
  height: "40px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: "18px",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: "38px",
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: "40px",
  lineHeight: "38px",
  borderRadius: "4px",
  width: "100px",
  fontSize: "15px",
  fontWeight: 700,
  color: theme.palette.getContrastText("#C92A57"),
  backgroundColor: "#C92A57",
  "&:hover": {
    backgroundColor: "#9f224e",
  },
}));

export default function CommentButton({ ...props }) {
  return (
    <ColorButton variant="contained" {...props}>
      {props.children}
    </ColorButton>
  );
}
