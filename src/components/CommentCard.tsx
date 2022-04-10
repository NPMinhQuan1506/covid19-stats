import { Avatar, Card, CardContent, CardHeader } from "@mui/material";

type Props = {
  avatarUrl?: string;
  name?: String;
  time?: string;
  content?: String;
};

export default function CommentCard(props: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt={`Ảnh đại diện của ${props.name ?? "Người dùng dấu tên"}`}
            src={props.avatarUrl}
          >
            {props.avatarUrl ?? "ND"}
          </Avatar>
        }
        title={props.name ?? "Người dùng dấu tên"}
        subheader={props.time ?? "Không rõ"}
      />
      <CardContent>{props.content}</CardContent>
    </Card>
  );
}
