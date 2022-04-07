import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Box, Grid, AlertTitle, Alert } from "@mui/material";
import CommentButton from "./CommentButton";

export default function CommentForm(props: any) {
  const formik = useFormik({
    initialValues: {
      comment: "",
      email: "",
      name: "",
    },
    validationSchema: Yup.object({
      comment: Yup.string().required("Bạn chưa nhập nội dung bình luận"),
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Email bạn nhập không hợp lệ"
        ),
      name: Yup.string()
        .required("Bạn chưa nhập tên")
        .max(100, "Chỉ được nhập tối đa 100 ký tự"),
    }),
    onSubmit: (values, { resetForm }) => {
      var currentdate = new Date();
      var datetime =
        +currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear();
      let customData = {
        id: props.length !== undefined ? props.length + 1 : -1,
        userName: values.name,
        email: values.email,
        comment: values.comment,
        likedNumber: 0,
        createdDate: datetime,
        subComment: [],
      };
      if (props.onAdd !== undefined) {
        props.onAdd(customData);
      } else {
        props.onAddSub(customData, props.id);
      }
      resetForm();
      setAlert(true);
      setTimeout(function () {
        setAlert(false);
      }, 2000);
    },
  });

  const [alert, setAlert] = useState(false);
  return (
    <Box mt={3}>
      {alert && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
          variant="filled"
          severity="success"
          style={{ position: "fixed", top: 0, left: "20vw", width: "60vw" }}
        >
          <AlertTitle>Thành Công</AlertTitle>
          Bình luận thành công!
        </Alert>
      )}
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box>
              <TextField
                type="comment"
                id="comment"
                label="Bình luận của bạn"
                variant="outlined"
                name="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                error={formik.errors.comment === undefined ? false : true}
                helperText={formik.errors.comment}
                fullWidth
                multiline
                rows={2}
                maxRows={4}
              />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <TextField
              type="email"
              id="email"
              label="Email"
              variant="outlined"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email === undefined ? false : true}
              helperText={formik.errors.email}
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              type="text"
              id="name"
              label="Họ và tên"
              variant="outlined"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name === undefined ? false : true}
              helperText={formik.errors.name}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <CommentButton type="submit"> Gửi </CommentButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
