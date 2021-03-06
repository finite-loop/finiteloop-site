import React from "react";

import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Teams from "../components/teams";

import "../layouts/index.scss";
import Offerrings from "../components/Offerings";
import SEO from "../components/seo";
import TemplateWrapper from "../components/layout";

const styles = theme => ({
  initial: {
    background: "url(/img/headerBackground.svg) no-repeat top left",
    paddingBottom: "50px"
  },
  header1: {
    [theme.breakpoints.down("sm")]: {
      padding: "150px 20px 100px 20px !important" // Overrides inline-style
    },
    marginTop: "50px",
    padding: "150px 50px 100px 100px",
    fontSize: "6vmin",
    color: "#70A999",
    letterSpacing: "1.29px",
    width: "100%",
    fontWeight: 500
  },
  header2: {
    margin: "10px 0px 0px 0px",
    fontSize: "5vmin",
    color: "#5C5C5C",
    letterSpacing: "1.29px",
    width: "24em",
    textAlign: "center"
  },
  title1: {
    fontSize: "36px",
    color: "#5C5C5C",
    letterSpacing: "1.29px",
    textAlign: "left",
    textTransform: "uppercase"
  },
  more: {
    textTransform: "uppercase",
    textAlign: "center",
    color: "#70A999",
    fontSize: "18px",
    lineHeight: "1.25"
  },

  // Offerrings Section

  offeringsSectionLeft: {
    background: "url(/img/kolamBackground.png) no-repeat top left",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "nowrap"
    },
    paddingTop: "50px",
    paddingBottom: "50px"
  },
  offeringsSectionRight: {
    background: "url(/img/kolamBackground.png) no-repeat top right",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "nowrap"
    },
    paddingTop: "50px",
    paddingBottom: "50px",
    alignItems: "center",
    justifyContent: "center"
  },
  offeringLeft: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none" // Overrides inline-style
    },
    marginLeft: "5%",
    marginRight: "5%"
  },
  offeringRight: {
    width: "100%",
    marginLeft: "5%",
    marginRight: "5%"
  },
  offeringBody1: {
    fontSize: "1.25rem",
    color: "#70A999",
    letterSpacing: "0.71px",
    fontWeight: 500,
    display: "flex"
  },

  // Teams Section styles

  teams: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-around"
  },
  teamsTitle: {
    textAlign: "center",
    color: "#70A999",
    fontSize: "36px",
    margin: "20px",
    fontWeight: 600
  },
  card: {
    display: "flex",
    // marginTop: '5px',
    flex: 1,
    maxWidth: "520px",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100%",
    border: 0,
    boxShadow: "none",
    backgroundColor: "transparent"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    minHeight: "100%"
  },
  cover: {
    width: "50%"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    justifyContent: "space-evenly"
  },
  icons: {
    paddingLeft: "5px"
  },

  // Case Studies section
  caseStudySection: {
    marginLeft: "5%",
    marginRight: "5%"
  },
  caseStudycard: {
    display: "flex",
    // marginTop: '5px',
    flex: 1,
    maxWidth: "450px",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100%",
    border: "2px solid #70A999",
    boxShadow: "none",
    backgroundColor: "transparent",
    marginLeft: "5%",
    marginRightL: "5%"
  },
  caseStudymedia: {
    height: 350,
    width: 300
  },
  caseStudycontent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#70A999"
  }
});

class IndexPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <TemplateWrapper>
        <div
          style={{
            background: "linear-gradient(-180deg, #FAFAFA 0%, #F1F1F1 100%)"
          }}
        >
          <section className={classes.initial} name="initial">
            <Typography component="h1" className={classes.header1}>
              We are a boutique consulting firm focusing on experience design
              and highly scalable technical architecture
            </Typography>
            <p className="line-1 anim-typewriter">WE HELP YOU SCALE...</p>
          </section>
        </div>
        <div style={{ background: "white" }}>
          <section name="more">
            <Typography component="span" className={classes.more}>
              More
              <br />
              <KeyboardArrowDown
                style={{
                  fontSize: "38px",
                  lineHeight: 0.5,
                  marginTop: "-10px"
                }}
              />
            </Typography>
          </section>
        </div>
        <Offerrings offeringsData={this.props} />
        <Teams teamsData={this.props} />
        {/*<CaseStudies caseStudiesData={this.props} />*/}
        <SEO postEdges={this.props} />
      </TemplateWrapper>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IndexPage);

export const teamsPageQuery = graphql`
  query Teams {
    Teams: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "teams-page" } } }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            image
            teamTitle
            teamDescription
            team {
              person {
                name
                title
                avatar
                quote
                background
                fbsiteurl
                twtrsiteurl
                lnkdnsiteurl
                githubsiteurl
              }
            }
          }
        }
      }
    }
    Offerings: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "offering" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            order
            path
            title
            image
            templateKey
            align
          }
        }
      }
    }
    Casestudies: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "case-study" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            path
            title
            image
            templateKey
            homepage
          }
        }
      }
    }
  }
`;
