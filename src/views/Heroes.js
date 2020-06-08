import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getHeroesAction } from "../actions/HeroesAction";
import { setToolbarTitleAction } from "../actions/ToolbarAction";
import HeroView from "../components/HeroView";
import { Box } from "@material-ui/core";

const Heroes = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToolbarTitleAction("Heroes"));
    const getHeroes = () => dispatch(getHeroesAction());
    getHeroes();
    // eslint-disable-next-line
  }, []);

  const { heroes, error, loading } = useSelector((state) => state.heroes);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {loading ? <Loading /> : null}
      {/* // TODO Create an Error component for all app*/}
      {error ? <h2>Error</h2> : null}

      {heroes
        ? heroes.map((heroe) => <HeroView key={heroe.id} hero={heroe} />)
        : null}
    </Box>
  );
};

export default Heroes;
