import React from "react";
import { Container, Typography } from "@mui/material";
import { DailyUpdateSection, TotalDaysSection, CommentSection, AboutSection } from "../components";

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Số liệu Covid-19 trên thế giới
      </Typography>

      <DailyUpdateSection />
      <TotalDaysSection />
      <CommentSection />
      <AboutSection />
    </Container>
  );
}
