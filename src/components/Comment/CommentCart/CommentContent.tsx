import { useState } from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommentAvatar from "./CommentAvatar";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import CommentForm from "../CommentForm";
const useStyle = makeStyles({
  toolboxComment: {
    fontSize: 16,
    color: "#4f4f4f",
    "&:hover": {
      color: "#9F224E",
    },
    cursor: "pointer",
    paddingLeft: "5px",
  },
});
export default function CommentContent(props: any) {
  const [showReply, setShowReply] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [liked, setLiked] = useState<number>(props.likedNumber);
  const classes = useStyle();
  const reply = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
      className={classes.toolboxComment}
    >
      <ReplyIcon fontSize="small" />
      <Typography
        component="p"
        onClick={() => {
          setShowReply(!showReply);
        }}
      >
        {showReply === true ? "ẩn" : props.subComment.length + " trả lời"}
      </Typography>
    </Box>
  );
  return (
    <Box>
      <Grid
        container
        spacing={1}
        ml={props.isChild && 1}
        mt={props.isChild && 0.1}
      >
        <Grid item xs={1} mr={0.5}>
          <CommentAvatar userName={props.userName} />
        </Grid>
        <Grid item xs={10}>
          <Typography component="div">
            {" "}
            <Box fontWeight="bold" display="inline">
              {props.userName}
            </Box>{" "}
            {props.comment}
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={0.5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
              className={classes.toolboxComment}
              onClick={()=>{
                  if(liked <= props.likedNumber)
                  {
                    setLiked(prev=>prev+1)
                  }
                 else{
                    setLiked(prev=>prev-1)
                 }
              }}
              style={{ color: liked <= props.likedNumber ? "#4f4f4f" :"#9F224E" }}
            >
              <ThumbUpAltOutlinedIcon fontSize="small" />
              <Typography component="p">{liked}</Typography>
            </Box>
            <Typography component="p" noWrap className={classes.toolboxComment} onClick={()=>{
                setShowForm(!showForm)
            }}>
              Trả lời
            </Typography>
            <Typography component="p" noWrap className={classes.toolboxComment}>
              Chia sẻ
            </Typography>
            <Typography
              component="p"
              noWrap
              style={{ fontSize: 16, color: "#4f4f4f", paddingLeft: "5px" }}
            >
              {props.createdDate}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          {" "}
          <Typography
            component="p"
            style={{ textAlign: "right" }}
            className={classes.toolboxComment}
          >
            Vi phạm
          </Typography>
        </Grid>
        <Grid item sm={1}></Grid>
        <Grid item sm={11} style={{ borderLeft: "1px solid rgb(117, 117, 117, 0.4)" }}>
            {showForm && <CommentForm onAddSub={props.addSubData} id={props.id}/>}
        </Grid>
        <Grid item sm={1}></Grid>
        <Grid item sm={11}>
          {props.subComment.length > 0 ? reply : null}
          {showReply &&
            props.subComment.map((item: any, index: number) => (
              <Box
                key={index}
                style={{ borderLeft: "1px solid rgb(117, 117, 117, 0.4)" }}
              >
                <CommentContent
                  id={props.id}
                  userName={item.userName}
                  comment={item.comment}
                  likedNumber={item.likedNumber}
                  subComment={[]}
                  createdDate={item.createdDate}
                  isChild={true}
                />
              </Box>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}
