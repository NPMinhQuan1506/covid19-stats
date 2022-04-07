import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

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
