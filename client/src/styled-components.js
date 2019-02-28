import styled from 'styled-components';

const centeringStyleProperties = `
  padding-left: 32px;
  padding-right: 32px;
  margin: 0px auto;
  max-width: 800px;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  padding-top: 14px;
  position: fixed;
  height: 48px;
  background-color: #1b1c1d;
`;

export const NavBar = styled.nav`
  ${centeringStyleProperties}
`;

export const MainContentContainer = styled.div`
  padding-top: 64px;
  ${centeringStyleProperties}
`;
