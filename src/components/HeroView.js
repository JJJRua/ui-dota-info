import React from 'react';
import PropTypes from 'prop-types';
import StrIcon from '@material-ui/icons/PanTool';
import AgiIcon from '@material-ui/icons/Speed';
import IntIcon from '@material-ui/icons/AcUnit';
import styled from 'styled-components';
const HeroCustom = styled.div`
  background: #b5afaf42;
  border-radius: 0.5rem;
  text-align: center;
  box-sizing: border-box;
  margin: 1rem;
  word-break: break-word;
  padding: 0.5rem;
  width: 12rem;
  height: 12rem;
  position: relative;
`;

const BeautyText = styled.p`
  position: absolute;
  width: 100%;
  bottom: 0;
  font-weight: 500;
  font-style: italic;
`;

const getIcon = (type) => {
  switch (type) {
    case 'agi':
      return <AgiIcon />;
    case 'str':
      return <StrIcon />;
    case 'int':
    default:
      return <IntIcon />;
  }
};

const HeroView = ({ hero }) => {
  return (
    <HeroCustom>
      {/* <Box flex="column"> */}
      <h3>{hero.localized_name}</h3>
      {getIcon(hero.primary_attr)}
      <h5> {hero.roles ? hero.roles.join() : null}</h5>
      <BeautyText>{hero.attack_type}</BeautyText>
      {/* </Box> */}
    </HeroCustom>
  );
};

HeroView.propTypes = {
  hero: PropTypes.object.isRequired
};

export default HeroView;
