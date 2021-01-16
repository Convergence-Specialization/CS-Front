import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter} from "react-router-dom";
import styled from "styled-components";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#A2C8F3",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    margin:'10px 0px'
  },
  HomeButton: {
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
 
  const classes = useStyles();
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
            <Con >마이페이지</Con>
          </div>
          <IconButton
            edge="start"
            className={classes.HomeButton}
            color="inherit"
            aria-label="Person"
          >
            <HomeIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(AppShell);
