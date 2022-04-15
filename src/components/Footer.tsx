import * as React from "react";
import { Link, AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./AppBar/AppBar.css"
export default function Footer() {
  var currentdate = new Date();
  var year = currentdate.getFullYear();

  return (
    <AppBar
      position="static"
      className="sticky-navigation"
      style={{ background: "#fff", color: "#333", marginTop: "50px",  boxShadow: "8px 0 32px 0 rgba( 31, 38, 135, 0.37 )", position: "relative", bottom: 0}}
    >
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit" align="center" width="100%">
            © {year} Team12 SGU
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
