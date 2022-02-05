import React, { useState } from 'react';
import { MainLayout, InnerLayout } from '../styles/LayoutStyles';
import { Title, Menu } from '../components';
import { menuItems } from '../data';

const Projects: React.FC = (): JSX.Element => {
  const [menuItemS, setMenuItemS] = useState(menuItems);

  return (
    <MainLayout>
      <Title title="Projects" span="Projects" />
      <InnerLayout>
        <Menu menuItems={menuItemS} />
      </InnerLayout>
    </MainLayout>
  );
};

export default Projects;
