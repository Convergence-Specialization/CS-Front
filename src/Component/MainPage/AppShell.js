import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#cca8e9",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    margin: "10px 300px",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },

  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

const AppShell = (props) => {
  const routerHistory = useHistory();
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };

  function handleButtonClick(pageURL) {
    history.push(pageURL);
  }

  const menuItems = [
    {
      menuTitle: "공지사항",
      pageURL: "/home",
    },
    {
      menuTitle: "게시판",
      pageURL: "/about",
    },
    {
      menuTitle: "융특캘린더",
      pageURL: "/contact",
    },
    {
      menuTitle: "마이페이지",
      pageURL: "/마이페이지",
    },
  ];

  return (
    <div className={classes.color}>
      <AppBar position="static">
        <Toolbar className={classes.color}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}>
            {menuItems.map((menuItem) => {
              const { menuTitle, pageURL } = menuItem;
              return (
                <MenuItem onClick={() => handleMenuClick(pageURL)}>
                  {menuTitle}
                </MenuItem>
              );
            })}
          </Menu>

          <div className={classes.headerOptions}>
            <Button color="inherit" onClick={() => handleButtonClick("/home")}>
              공지사항
            </Button>
            <Button
              color="inherit"
              onClick={() => routerHistory.push("/board")}>
              게시판
            </Button>
            <Button
              color="inherit"
              onClick={() => handleButtonClick("/contact")}>
              융특캘린더
            </Button>
            <Button
              color="inherit"
              onClick={() => handleButtonClick("/마이페이지")}>
              마이페이지
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(AppShell);
