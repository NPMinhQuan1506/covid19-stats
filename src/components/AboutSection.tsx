import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@mui/styles";
import {
  Divider,
  Typography,
  Grid,
  Avatar,
  Box,
  Container,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import "./About.css";
const aliasTeacher = [
  'Người Thầy Tuyệt Vời', 'Phù Thủy Công Nghệ', 'Hình Mẫu Lý Tưởng'
]
const useStyle = makeStyles({
  fadeIn: {
    opacity: 1,
    animation: "$fadeInOpacity  3s ease-in 1",
  },
  "@keyframes fadeInOpacity": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  }
})
export default function AboutSection() {
  const [newName, setnewName] = useState("Người Thầy Tuyệt Vời");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * aliasTeacher.length);
      setnewName(aliasTeacher[index]);
  }, []);
  const classes = useStyle();

  useEffect(() => {
      const intervalID = setInterval(shuffle, 3000);
      return () => clearInterval(intervalID);
  }, [shuffle])

  
  return (
    <Container >
      <div className="pot">
        <img
         alt="aaa"
          src="https://media0.giphy.com/media/1Qn53anm8OTJheX1Ci/giphy.gif?cid=ecf05e47vubwiautjcdbknyfz8dec49lnkr9g271zu6far5e&rid=giphy.gif&ct=g"
          width="100px"
          height="120px"
        />
       <div style={{color: "#205030"}}>COVID - 19</div> 
      </div>
      <Divider />
      <Typography style={{ fontSize: "20px", fontWeight: "bold", marginTop: 0, lineHeight: 0 }} padding={2}>
        Về chúng tôi (Nhóm 12)
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            
            <Avatar
              alt="Thay Vuong"
              src="/Avartar_Thay_Vuong.jpg"
              sx={{ width: 300, height: 300 }}
              className="avatar-vuong"
            />
            
            <h1 >Thầy Vương</h1>
            <p key={Math.floor(Math.random() *999)}  className={classes.fadeIn} style={{fontSize: "1.5rem", fontWeight: "bold", textAlign: "center", marginTop: 0, lineHeight: 0 }}>{newName}</p>
            <Typography
              sx={{
                padding: "0 320px",
                marginBottom: "30px",
                textAlign: "near",
              }}
            >
              Hiểu biết sâu rộng, nhiệt huyết, tận tâm, tốt bụng, vui tính, hòa
              đồng đó là những đức tính có ở người thầy tuyệt vời của chúng em.
              Thầy Phạm Thi Vương người được mệnh danh là phù thủy công nghệ với
              tầm hiểu biết và sự cập nhật thông tin về công nghệ vô cùng toàn
              diện và nhanh chóng.
            </Typography>
            <Typography
              component="p"
              style={{ fontWeight: "bold" }}
              sx={{
                padding: "0 320px",
                marginBottom: "30px",
                textAlign: "near",
              }}
            >
              Một trong những hình mẫu lý tưởng ở ngôi trường SGU -Thầy Vương Phù Thủy
              Công Nghệ .
            </Typography>
          </Box>
        </Grid>


        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              variant="square"
              src="/Avatar_quan.png"
              sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}
              style={{ borderRadius: "6px" }}
            />
            <Grid style={{ marginLeft: "20px" }} item xs={12}>
              <h2>Nguyễn Phạm Minh Quân</h2>
              <p>MSSV:3118410355</p>
              <p>Sinh viên đại học Sài Gòn khoa Công nghệ thông tin</p>
              <b>Thành Viên 1</b>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              variant="square"
              src="/Avatar_quang.png"
              sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}
              style={{ borderRadius: "6px" }}
            />
            <Grid style={{ marginLeft: "20px" }} item xs={12}>
              <h2>Phạm Minh Quang</h2>
              <p>MSSV:3118410347</p>
              <p>Sinh viên đại học Sài Gòn khoa Công nghệ thông tin</p>
              <b>Thành Viên 2</b>
            </Grid>
          </Box>
        </Grid>

        
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              variant="square"
              src="/Avatar_lap.jpg"
              sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}
              style={{ borderRadius: "6px" }}
            />
            <Grid style={{ marginLeft: "20px" }} item xs={12}>
              <h2>Phạm Công Lập</h2>
              <p>MSSV:3118410222</p>
              <p>Sinh viên đại học khoa Công nghệ thông tin</p>
              <b>Thành Viên 3</b>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              variant="square"
              src="/Avatar_minh.png"
              sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}
              style={{ borderRadius: "6px" }}
            />
            <Grid style={{ marginLeft: "20px" }} item xs={12}>
              <h2>Nguyễn Công Minh</h2>
              <p>MSSV:3118412035</p>
              <p>Sinh viên đại học Sài Gòn khoa Công nghệ thông tin</p>
              <b>Thành Viên 4</b>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
}
