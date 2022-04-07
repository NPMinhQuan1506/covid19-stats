import {
  Divider,
  Typography,
  Grid,
  Avatar,
  Box,
  Container,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function AboutSection() {
  return (
    <Container>
      <Divider />
      <Typography style={{ fontSize: "20px", fontWeight: "bold" }} padding={2}>
        Về chúng tôi
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
              alt="Remy Sharp"
              src="https://i.pinimg.com/originals/e3/d4/f1/e3d4f113ce1aa1e93b89df0bed7ffffb.jpg"
              sx={{ width: 300, height: 300 }}
            />
            <h1>Thầy giáo dễ thương</h1>
            <Typography
              sx={{
                padding: "0 300px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Trong suốt 5 năm học dưới mái trường đại học, em đã nhận được sự
              yêu thương, dạy dỗ của rất nhiều thầy cô giáo, trong đó người để
              lại trong trái tim em nhiều tình cảm tốt đẹp nhất chính là cô Mai
              Phương- giáo viên chủ nhiệm lớp em.
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
              src="https://i.pinimg.com/originals/f5/d4/7c/f5d47c8d01b62798cd19aa1e477d5f91.png"
              sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}
              style={{ borderRadius: "6px" }}
            />
            <Grid style={{ marginLeft: "20px" }} item xs={12}>
              <h2>Tịnh Thi</h2>
              <p>MSSV:DH5180203</p>
              <p>Sinh viên đại học chuyên ngành Công nghệ thông tin</p>
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
              src="https://i.pinimg.com/564x/61/57/01/6157016e70824b5e4029735c495e860a.jpg"
              sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}
              style={{ borderRadius: "6px" }}
            />
            <Grid style={{ marginLeft: "20px" }} item xs={12}>
              <h2>Ngân Dút</h2>
              <p>MSSV:DH5180203</p>
              <p>Sinh viên đại học chuyên ngành Marketing</p>
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
              src="https://i.pinimg.com/564x/23/fa/36/23fa36ff222f779c9c94dc85c0a3c7bc.jpg"
              sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}
              style={{ borderRadius: "6px" }}
            />
            <Grid style={{ marginLeft: "20px" }} item xs={12}>
              <h2>Mỹ Huyền</h2>
              <p>MSSV:DH5180203</p>
              <p>Sinh viên đại học chuyên ngành Kế toán</p>
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
              src="https://i.pinimg.com/564x/db/04/a8/db04a8c82bf24ba2b3ec928aafea946c.jpg"
              sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}
              style={{ borderRadius: "6px" }}
            />
            <Grid style={{ marginLeft: "20px" }} item xs={12}>
              <h2>Gia Nghi</h2>
              <p>MSSV:DH5180203</p>
              <p>Sinh viên đại học chuyên ngành Giao thông vận tải</p>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Divider />
    </Container>
  );
}
