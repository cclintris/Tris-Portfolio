import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Portfolios from '../pages/Portfolios';
import Resume from '../pages/Resume';
import NotFound from '../pages/NotFound';
import { ReactElement } from 'react-transition-group/node_modules/@types/react';

export const get_Route_JSX_According_to_Path = (path: string): ReactElement => {
  switch (path) {
    case '/':
      return React.createElement(Home, null, null);
    case '/about':
      return React.createElement(About, null, null);
    case '/blogs':
      return React.createElement(Blogs, null, null);
    case '/contact':
      return React.createElement(Contact, null, null);
    case '/portfolios':
      return React.createElement(Portfolios, null, null);
    case '/resume':
      return React.createElement(Resume, null, null);
    default:
      console.error('No such route!');
      return React.createElement(NotFound, null, null);
  }
};