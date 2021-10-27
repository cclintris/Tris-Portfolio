import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
