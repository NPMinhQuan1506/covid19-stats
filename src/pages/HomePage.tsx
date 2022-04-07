import { Container, Typography } from "@mui/material";
import {
  DailyOverview,
  DailyUpdateSection,
  TotalDaysSection,
} from "../components";

import Comment from "../components/CommentSection";
import Hightlight from "../components/Highlight";

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Số liệu Covid-19 trên thế giới
      </Typography>

      <DailyUpdateSection />

      <DailyOverview />

      <TotalDaysSection />

      <Hightlight />

      <Comment />
    </Container>
  );
}
