import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getHeroesAction } from "../actions/HeroesAction";

const Heroes = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getHeroes = () => dispatch(getHeroesAction());
    getHeroes();
    // eslint-disable-next-line
  }, []);

  const { heroes, error, loading } = useSelector((state) => state.heroes);

  return (
    <>
      {loading ? <Loading /> : null}
      {/* // TODO Create an Error component for all app*/}
      {error ? <h2>Error</h2> : null}
     {heroes ? heroes.map((heroe) => <h5 key={heroe.id}>{heroe.name}</h5>) : null}
    </>
  );
};

export default Heroes;
