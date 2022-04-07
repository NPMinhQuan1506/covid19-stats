import React from "react";
import { Container, Typography } from "@mui/material";
import { DailyUpdateSection } from "../components";
import Highlight from "../components/Highlight";
import Comment from "../components/Comment"

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Số liệu Covid-19 trên thế giới
      </Typography>

      <DailyUpdateSection />
      <Highlight />
      <Comment />
    </Container>
  );
}
