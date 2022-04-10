import { Divider, Typography } from "@mui/material";

import { faker } from "@faker-js/faker";

import { CommentCard } from ".";

export default function CommentSection() {
  faker.locale = "en";

  return (
    <>
      <Divider />

      <Typography style={{ fontSize: "20px", fontWeight: "bold" }} padding={2}>
        Bình luận
      </Typography>

      {Array.from(Array(10), (_) => (
        <CommentCard
          avatarUrl={faker.image.avatar()}
          name={faker.name.findName()}
          time={faker.date.past().toISOString()}
          content={faker.lorem.paragraph()}
        />
      ))}

      <Divider />
    </>
  );
}
