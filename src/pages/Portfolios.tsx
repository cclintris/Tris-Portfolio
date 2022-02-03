import React, { useState } from 'react';
import { MainLayout, InnerLayout } from '../styles/LayoutStyles';
import { Title, Menu } from '../components';
import { menuItems } from '../data';

const Portfolios: React.FC = (): JSX.Element => {
  const [menuItemS, setMenuItemS] = useState(menuItems);

  return (
    <MainLayout>
      <Title title="Portfolios" span="Portfolios" />
      <InnerLayout>
        <Menu menuItems={menuItemS} />
      </InnerLayout>
    </MainLayout>
  );
};

export default Portfolios;
