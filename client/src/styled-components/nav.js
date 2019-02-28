import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { centeringStyleProperties } from './common';

const navColor = '#00264d';
const navNegativeColor = 'white';

export const NavBarContainer = styled.div`
  width: 100%;
  padding-top: 6px;
  position: fixed;
  height: 48px;
  background-color: ${navColor};
`;

export const NavBar = styled.nav`
  ${centeringStyleProperties}
`;

export const StyledNavLink = styled(NavLink)`
  color: ${navNegativeColor};
  display: inline-block;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  height: 36px;
  vertical-align: middle;

  &:not(:last-child) {
    margin-right: 6px;
  }

  &:hover {
    background-color: ${navNegativeColor};
    color: ${navColor};
  }

  &.NavLink--active {
    color: ${navColor};
    background-color: ${navNegativeColor};
  }
`;
