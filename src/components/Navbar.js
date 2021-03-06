import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";

import { GitHubIcon, TwtrIcon, LnkdnIcon } from "./icons/icons";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%"
  },
  flex: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: "0px",
    flexWrap: "wrap"
  },
  logo: {
    /* Rectangle: */
    border: "2px solid #70A898",
    color: "#70A999",
    letterSpacing: "0.71px",
    textDecoration: "none",
    padding: "5px 10px 5px 10px",
    textTransform: "uppercase",
    marginLeft: "20px"
  },
  button: {
    //display: 'flex',
    margin: theme.spacing.unit,
    flexWrap: "wrap",
    /* OUR PEOPLE: */
    fontSize: "18px",
    color: "#5C5C5C",
    letterSpacing: "0.71px",
    textAlign: "center"
  },
  menuList: {
    width: "auto",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Navbar extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const menuList = (
      <div className={classes.menuList}>
        {this.props.links.map(({ item: headerLinks }) => (
          <Button
            key={headerLinks.title}
            component={Link}
            to={headerLinks.url}
            className={classes.button}
            color="primary"
          >
            {headerLinks.title}
          </Button>
        ))}
        <Divider />
        <IconButton
          className={classes.button}
          href={this.props.social.twtrUrl}
          target="_new"
        >
          <TwtrIcon />
        </IconButton>
        <IconButton
          className={classes.button}
          href={this.props.social.lnkdnUrl}
          target="_new"
        >
          <LnkdnIcon />
        </IconButton>
        <IconButton
          className={classes.button}
          href={this.props.social.githubUrl}
          target="_new"
        >
          <GitHubIcon />
        </IconButton>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar
          style={{
            boxShadow: "none",
            backgroundColor: "#fafafa",
            paddingTop: "10px"
          }}
          position="fixed"
          color="default"
        >
          <Toolbar>
            <Link to="/" className={classes.logo}>
              <Typography
                color="inherit"
                component="span"
                style={{ fontSize: "20px" }}
              >
                {this.props.title}
              </Typography>
            </Link>
            <Typography
              variant="display2"
              color="inherit"
              className={classes.flex}
            />
            <Hidden xsDown implementation="css">
              <div>
                {this.props.links.map(({ item: headerLinks }) => (
                  <Button
                    key={headerLinks.title}
                    component={Link}
                    to={headerLinks.url}
                    className={classes.button}
                    color="primary"
                  >
                    {headerLinks.title}
                  </Button>
                ))}
                <IconButton
                  className={classes.button}
                  href={this.props.social.twtrUrl}
                  target="_new"
                >
                  <TwtrIcon />
                </IconButton>
                <IconButton
                  className={classes.button}
                  href={this.props.social.lnkdnUrl}
                  target="_new"
                >
                  <LnkdnIcon />
                </IconButton>
                <IconButton
                  className={classes.button}
                  href={this.props.social.githubUrl}
                  target="_new"
                >
                  <GitHubIcon />
                </IconButton>
              </div>
            </Hidden>
            <Hidden smUp implementation="css">
              <IconButton onClick={this.toggleDrawer("top", true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={this.state.top}
                onClose={this.toggleDrawer("top", false)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer("top", false)}
                  onKeyDown={this.toggleDrawer("top", false)}
                >
                  {menuList}
                </div>
              </Drawer>
            </Hidden>
          </Toolbar>
          <Divider
            style={{
              backgroundColor: "#70A999",
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "10px"
            }}
          />
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (withWidth(), withStyles(styles)(Navbar));
