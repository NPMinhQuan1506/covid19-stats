import { Button, Container, Divider, Typography } from "@mui/material";
import Hightlight from "../components/Highlight";
import {
  DailyUpdateSection,
  TotalDaysSection,
  CommentSection,
} from "../components";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Số liệu Covid-19 trên thế giới
      </Typography>

      <DailyUpdateSection />
      <TotalDaysSection />
      <Hightlight />
      <CommentSection />

      <Divider />

      <Button>
        <Link to="/about">Về chúng tôi</Link>
      </Button>
    </Container>
  );
}
