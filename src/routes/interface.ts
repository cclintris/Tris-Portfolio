import { ReactElement } from 'react';

export interface Route {
  name: string;
  path: string;
  component: ReactElement;
}
