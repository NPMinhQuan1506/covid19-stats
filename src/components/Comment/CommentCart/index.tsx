import React from "react";
import { Box } from "@mui/material";
import CommentContent from "./CommentContent";

export default function index(props: any) {

  return (
    <Box>
      { props.data.map((item: any, index: number) => (
         <CommentContent  key={index}
         id={item.id}
         userName={item.userName}
         comment={item.comment}
         likedNumber={item.likedNumber}
         subComment={item.subComment}
         createdDate={item.createdDate}
         addSubData={props.onAddSub} 
         />
      )).sort((a: any, b: any)=>{      
          if(props.IsToggle){
              return parseFloat(b.props.likedNumber) - parseFloat(a.props.likedNumber)
          }
          else{
            return parseFloat(b.props.id) - parseFloat(a.props.id)
          }
      }).slice(0, props.commentShowing) }
    </Box>
  );
}
