import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import {
  TextField,
  Box,
  Grid,
  AlertTitle,
  Alert,
  Container,
  Typography,
} from "@mui/material";
import ContactButton from "./ContactButton";

const useStyle = makeStyles({
  info: {
    width: "100%",
    padding: 30,
    marginRight: 50,
    borderRadius: "50px",
    background: "linear-gradient(145deg, #dde2e6, #ffffff);",
    boxShadow: "6px 6px 12px #bfc4c7, -6px -6px 12px #ffffff",
  },
  contactForm: {
    width: "100%",
    padding: 30,
    paddingTop: 70,
    borderRadius: "50px",
    background: "linear-gradient(225deg, #e1e4e6, #ffffff)",
    boxShadow: "10px 10px 20px #b2b4b5, -10px -10px 20px #ffffff",
  },
  containerContact:{
    width: "100%",
    marginTop: 30,
    borderRadius: "32px",
    background: "linear-gradient(145deg, #ffffff, #e1e4e6)",
    boxShadow: "24px 24px 49px #969899, -24px -24px 49px #ffffff",
  }
});
export default function Contact() {
  const classes = useStyle()
  const formik = useFormik({
    initialValues: {
      contact: "",
      email: "",
      name: "",
    },
    validationSchema: Yup.object({
      contact: Yup.string().required("Bạn chưa nhập nội dung phản hồi"),
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
      resetForm();
      setAlert(true);
      setTimeout(function () {
        setAlert(false);
      }, 2000);
    },
  });

  const [alert, setAlert] = useState(false);
  return (
    <Container className={classes.containerContact}>
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
            Phản Hồi thành công!
          </Alert>
        )}
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} style={{ marginTop: 30 }}>
            <Box className={classes.info}>
              <Typography component="h1" style={{ fontSize: "1.5rem" }}>
                {" "}
                Chờ đợi phản hồi từ bạn{" "}
              </Typography>
              <Typography
                component="p"
                style={{ fontSize: "1rem", marginTop: 4 }}
              >
                {" "}
                Chúng tôi chờ đời những phản hồi đóng góp ý kiến từ các bạn. Hãy
                gửi đến chúng tôi những phản hồi góp ý từ bạn thông qua form
                phản hồi bên cạnh.{" "}
              </Typography>
              <Typography
                component="p"
                style={{ fontSize: "1rem", marginTop: 5, fontStyle: "oblique" }}
              >
                * Hoặc liên hệ trực tiếp với chúng tôi qua thông tin sau:{" "}
              </Typography>
              <Box style={{ marginTop: 8 }}>
                <Typography
                  component="p"
                  style={{ fontWeight: "bold", marginTop: 8 }}
                >
                  Nhóm :
                  <Typography
                    component="span"
                    style={{
                      fontSize: "1rem",
                      fontStyle: "italic",
                      color: "#1C4CC5",
                    }}
                  >
                    12 Chiều Thứ 2
                  </Typography>
                </Typography>
                <Typography
                  component="p"
                  style={{ fontWeight: "bold", marginTop: 8 }}
                >
                  Email :{" "}
                  <Typography
                    component="span"
                    style={{
                      fontSize: "1rem",
                      fontStyle: "italic",
                      color: "#1C4CC5",
                    }}
                  >
                    team15@it.sgu.edu.com
                  </Typography>
                </Typography>

                <Typography
                  component="p"
                  style={{ fontWeight: "bold", marginTop: 8 }}
                >
                  SĐT :
                  <Typography
                    component="span"
                    style={{
                      fontSize: "1rem",
                      fontStyle: "italic",
                      color: "#1C4CC5",
                    }}
                  >
                    0909999888
                  </Typography>
                </Typography>
                <Typography
                  component="p"
                  style={{ fontWeight: "bold", marginTop: 8 }}
                >
                  Địa Chỉ :
                  <Typography
                    component="span"
                    style={{
                      fontSize: "1rem",
                      fontStyle: "italic",
                      color: "#1C4CC5",
                    }}
                  >
                    273 An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={1} xs={12} style={{ marginTop: 30 }}>
          </Grid>
          <Grid item sm={5} xs={12} style={{ marginTop: 30 }}>
            <Box className={classes.contactForm}>
            <Typography
              component="h1"
              variant="body1"
              style={{ fontSize: "1.5rem" }}
            >
              Phản Hồi
            </Typography>
            <form
              className="infoform"
              onSubmit={formik.handleSubmit}
              style={{ marginTop: 10 }}
            >
              <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
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
                <Grid item sm={12} xs={12}>
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
                <Grid item xs={12}>
                  <Box>
                    <TextField
                      type="contact"
                      id="contact"
                      label="Phản hồi của bạn"
                      variant="outlined"
                      name="contact"
                      value={formik.values.contact}
                      onChange={formik.handleChange}
                      error={formik.errors.contact === undefined ? false : true}
                      helperText={formik.errors.contact}
                      fullWidth
                      multiline
                      rows={4}
                      maxRows={6}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <ContactButton type="submit"> Gửi </ContactButton>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </form>
            </Box>
          </Grid>
        </Grid>
        -
      </Box>
    </Container>
  );
}
