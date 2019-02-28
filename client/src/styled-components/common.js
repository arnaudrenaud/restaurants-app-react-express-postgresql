import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export const centeringStyleProperties = `
  padding-left: 32px;
  padding-right: 32px;
  margin: 0px auto;
  max-width: 800px;
`;

export const StyledIcon = styled(Icon)`
  &&& {
    color: inherit !important;
  }
`;

export const MainContentContainer = styled.div`
  padding-top: 64px;
  ${centeringStyleProperties}
`;
