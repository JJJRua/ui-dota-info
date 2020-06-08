import React, { useEffect } from 'react';
import { setToolbarTitleAction } from '../actions/ToolbarAction';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamListAction } from '../actions/TeamsAction';
import { Box } from '@material-ui/core';
import Loading from '../components/Loading';
import TeamView from '../components/TeamView';

const Teams = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToolbarTitleAction('Teams'));
    const getTeams = () => dispatch(getTeamListAction());
    getTeams();
    // eslint-disable-next-line
  }, []);
  const { loading,teams } = useSelector((state) => state.teams);
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
      {loading ? <Loading /> : null}
      {teams ? teams.map((team)=> <TeamView  key={team.id}  team={team} />) : null}
    </Box>
  );
};

export default Teams;
