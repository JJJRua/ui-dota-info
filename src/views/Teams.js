import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { setToolbarTitleAction } from "../actions/ToolbarAction";
import { useDispatch } from "react-redux";

const Teams = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToolbarTitleAction("Teams"));
    // eslint-disable-next-line
  }, []);

  return <div>TEAMS</div>;
};

Teams.propTypes = {};

export default Teams;
