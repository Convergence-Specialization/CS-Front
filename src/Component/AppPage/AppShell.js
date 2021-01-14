import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#cca8e9",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    margin:'10px 0px'
  },
  PersonButton: {
    marginRight: theme.spacing(2),
    margin:'10px 0px'
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

const Con = styled.div`
  font-size: 30px;
`;

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


  return (
    <div className={classes.color}>
      <AppBar position="static">
        <Toolbar className={classes.color}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <div className={classes.headerOptions}>
            <Con >숭실대학교 슝</Con>
          </div>
          <IconButton
            edge="start"
            className={classes.PersonButton}
            color="inherit"
            aria-label="Person"
          >
            <PersonIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(AppShell);
