import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CommentCart from "./CommentCart";
import CommentTab from "./CommentTab";
import CommentForm from "./CommentForm";
const initData = [
  {
    id: 1,
    userName: "Nguyệt",
    email: "nguyet@gmail.com",
    comment:
      " Bệnh quan trọng nhất là tử vong, nhưng ở tầm xã hội, số ca đang điều trị ảnh hưởng lớn hơn nhiều, bạn cứ nghĩ khoảng hơn một nữa người đang điều trị tương tự người lao động bị thất nghiệp tạm thời đó, trong khi doanh nghiệp lại thiếu lao động với số lượng tương tự",
    likedNumber: 82,
    createdDate: "21:46 15/3/2022",
    subComment: [
      {
        id: 1,
        userName: "Alili My",
        email: "my@gmail.com",
        comment: "Nhất trí",
        likedNumber: 1,
        createdDate: "21:46 15/3/2022",
      },
      {
        id: 2,
        userName: "Binh",
        email: "bing@gmail.com",
        comment: "Nhất trí",
        likedNumber: 2,
        createdDate: "21:46 15/3/2022",
      },
    ],
  },
  {
    id: 2,
    userName: "Thư Đàm",
    email: "thudam@gmail.com",
    comment:
      " Bệnh quan trọng nhất là tử vong, nhưng ở tầm xã hội, số ca đang điều trị ảnh hưởng lớn hơn nhiều, bạn cứ nghĩ khoảng hơn một nữa người đang điều trị tương tự người lao động bị thất nghiệp tạm thời đó, trong khi doanh nghiệp lại thiếu lao động với số lượng tương tự",
    likedNumber: 15,
    createdDate: "21:46 15/3/2022",
    subComment: [
      {
        id: 1,
        userName: "Alili My",
        email: "my@gmail.com",
        comment: "Nhất trí",
        likedNumber: 1,
        createdDate: "21:46 15/3/2022",
      },
    ],
  },
  {
    id: 3,
    userName: "Tèo",
    email: "teo@gmail.com",
    comment:
      " Bệnh quan trọng nhất là tử vong, nhưng ở tầm xã hội, số ca đang điều trị ảnh hưởng lớn hơn nhiều, bạn cứ nghĩ khoảng hơn một nữa người đang điều trị tương tự người lao động bị thất nghiệp tạm thời đó, trong khi doanh nghiệp lại thiếu lao động với số lượng tương tự",
    likedNumber: 3,
    createdDate: "21:46 15/3/2022",
    subComment: [],
  },
];

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(initData);

  const addData = (item: any) => {
    setData((prev) => [...prev, item]);
  };

  const addSubData = (item: any, id: number) => {
     let tempData= [...data]
    let objIndex = tempData.findIndex((obj) => obj.id === id);
    const customData = {
      id:  tempData[objIndex].subComment.length + 1,
      userName: item.userName,
      email: item.email,
      comment: item.comment,
      likedNumber: 0,
      createdDate: item.createdDate,
    };
    tempData[objIndex].subComment.push(customData);
    // console.log(tempData)
    setData(tempData);
  };
  const tab = [
    {
      title: "Quan tâm nhất",
      content: <CommentCart data={data} onAddSub={addSubData} IsToggle={true} />,
    },
    {
      title: "Mới nhất",
      content: <CommentCart data={data} onAddSub={addSubData} IsToggle={false} />,
    },
  ];
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <Typography
            component="p"
            variant="h4"
            style={{ color: "#222222", fontSize: "23px", fontWeight: "bold" }}
          >
            Ý kiến
            <Typography
              component="span"
              style={{ color: "#222222", fontSize: "18px" }}
            >
              {" "}
              ({data.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
            </Typography>
          </Typography>
          <CommentForm onAdd={addData} length={data.length} />
          <CommentTab tabContent={tab} />
        </Grid>
        <Grid item sm={4} xs={12}></Grid>
      </Grid>
    </Container>
  );
}
