import { Route } from './interface';

/**
 * @global Global routes
 * @author cclintris
 * @since 2021/10/23
 */

export const routes: Route[] = [
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'ABOUT',
    path: '/about',
  },
  {
    name: 'BLOGS',
    path: '/blogs',
  },
  {
    name: 'PORTFOLIOS',
    path: '/portfolios',
  },
  {
    name: 'RESUME',
    path: '/resume',
  },
  {
    name: 'CONTACT',
    path: '/contact',
  },
];
