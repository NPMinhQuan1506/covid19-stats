import * as React from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./AppBar.css";
const pages = [
  { title: "Trang Chủ", link: "/" },
  { title: "Về Chúng Tôi", link: "/about" },
  { title: "Liên Hệ", link: "/contact" },
];

const useStyle = makeStyles({
  active: {
    textDecoration: "underline solid #00003b 3px",
    textUnderlineOffset: "5px",
  },
  inactive: { textDecoration: "none" },
});

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const classes = useStyle();
  return (
    <AppBar
      position="static"
      className="sticky-navigation"
      style={{ background: "#fff", color: "#333", marginBottom: "10px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
              color: "#00003b",
              display: "flex"
            }}
          >
          <Avatar
            alt="icon-logo"
            src="/logo-covid.png"
            sx={{ width: 50, height: 50 }}
          />

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              style={{ paddingLeft: 5, paddingTop: 9, display: "inline" }}
            >
              COVID19 - STATS
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.inactive
                  }
                  to={page.link}
                  style={{ color: "#333" }}
                >
                  <MenuItem key={index}>
                    <Typography textAlign="center" style={{ color: "#333" }}>
                      {" "}
                      {page.title}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            COVID19 - STATS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inactive
                }
                to={page.link}
                style={{ color: "#333" }}
              >
                <Button
                  key={index}
                  // onClick={() => (window.location.href = page.link)}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{ color: "#333" }}
                >
                  {" "}
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
