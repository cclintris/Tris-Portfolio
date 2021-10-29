import { Info, Service } from './interface';
import frontend from '../../assets/img/frontend.svg';
import teach from '../../assets/img/teach.svg';

export const paragraph: string =
  'a software engineer focused and passionate in frontend web development. Loves coding, basketball, music and also a cat person!';

export const info: Info[] = [
  {
    attr: 'Full Name',
    value: 'Tristan Lin',
  },
  {
    attr: 'Age',
    value: '21',
  },
  {
    attr: 'Nationality',
    value: 'USA / Taiwan',
  },
  {
    attr: 'Languages',
    value: 'English / Mandarin',
  },
  {
    attr: 'Location',
    value: 'Nanjing, China',
  },
  {
    attr: 'Occupation',
    value: 'NJU University Student (Senior)',
  },
];

export const services: Service[] = [
  {
    image: frontend,
    title: 'Software development',
    paragraph:
      'Front end stack developer, expertise in React.js, Vue.js, TS, JS, etc .',
  },
  {
    image: teach,
    title: 'Frontend Web learning',
    paragraph:
      'Provide comprehensive and efficient learning route of front end web development.',
  },
];
