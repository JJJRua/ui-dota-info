import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    background: "rgba(0,0,0,0.2)",
    margin: "1rem 0",
    padding: "0.5rem",
  },
  media: {
    height: 150,
    width: 150
  },
}));

const TeamView = ({ team }) => {
  const classes = useStyles();
  return (
    <Box  >
      <Card className={classes.root} >
        {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image={team.logo_url}
          align="center"
        />
        <CardContent>
          <Typography align="center" variant='h5' >
            {team.name}
          </Typography>
          <Typography align="center"  component='p'>
            Wins : {team.wins}
          </Typography>
          <Typography align="center"  >
            Losses : {team.losses}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </Box>
  );
};

TeamView.propTypes = {
  team: PropTypes.object.isRequired,
};

export default TeamView;
