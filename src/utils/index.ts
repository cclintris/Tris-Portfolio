import { createElement } from 'react';
import { routes } from '../routes';
import { ASSERT_EQUAL_MSG, ASSERT_TRUE_MSG } from '../constants';
import NotFound from '../pages/NotFound';

export const get_Route_JSX_According_to_Path = (route: string) => {
  let ROUTE_EXIST = false;
  for (let i = 0; i < routes.length; i++) {
    const { path, component } = routes[i];
    if (path === route) {
      ROUTE_EXIST = true;
      return component;
    }
  }
  if (!ROUTE_EXIST) {
    return createElement(NotFound, null, null);
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
