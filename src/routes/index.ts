import { Route } from './interface';
import { createElement } from 'react';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

/**
 * @global Global routes
 */

export const routes: Route[] = [
  {
    name: 'HOME',
    path: '/',
    component: createElement(Home, null, null),
  },
  {
    name: 'ABOUT',
    path: '/about',
    component: createElement(About, null, null),
  },
  {
    name: 'BLOGS',
    path: '/blogs',
    component: createElement(Blogs, null, null),
  },
  {
    name: 'PROJECTS',
    path: '/projects',
    component: createElement(Projects, null, null),
  },
  {
    name: 'RESUME',
    path: '/resume',
    component: createElement(Resume, null, null),
  },
  {
    name: 'CONTACT',
    path: '/contact',
    component: createElement(Contact, null, null),
  },
];
