import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Portfolios from '../pages/Portfolios';
import Resume from '../pages/Resume';
import NotFound from '../pages/NotFound';
import { ReactElement } from 'hoist-non-react-statics/node_modules/@types/react';
import { ASSERT_EQUAL_MSG, ASSERT_TRUE_MSG } from '../constants';

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

export const assertEqual = (
  condition: any,
  expected: any,
  errMsg?: string
): void => {
  if (condition !== expected) {
    if (!errMsg) {
      throw new Error(ASSERT_EQUAL_MSG);
    }
    throw new Error(errMsg);
  }
};

export const assertTrue = (condition: any, errMsg?: string): void => {
  if (!condition) {
    if (!errMsg) {
      throw new Error(ASSERT_TRUE_MSG);
    }
    throw new Error(errMsg);
  }
};
