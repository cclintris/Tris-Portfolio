import React from 'react';
import { StyledSidebar } from './styles';
import Navigator from './Navigator';

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <StyledSidebar>
      <Navigator />
    </StyledSidebar>
  );
};

export default Sidebar;
