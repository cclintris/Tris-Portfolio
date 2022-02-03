import React from 'react';
import {
  Info,
  Service,
  Hobby,
  ContactItem,
  SkillAccordion,
  Education,
  Work,
  MenuItem,
} from './interface';
import frontend from '../assets/img/frontend.svg';
import teach from '../assets/img/teach.svg';
import basketball from '../assets/img/basketball.svg';
import billard from '../assets/img/billard.svg';
import chess from '../assets/img/chess.svg';
import sing from '../assets/img/sing.svg';
import violin from '../assets/img/violin.svg';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HTML from '../assets/img/html.svg';
import JS from '../assets/img/js.svg';
import CSS from '../assets/img/css.svg';
import react from '../assets/img/react.svg';
import vue from '../assets/img/vue.svg';
import cpp from '../assets/img/cpp.svg';
import java from '../assets/img/java.svg';
import python from '../assets/img/python.svg';
import ts from '../assets/img/ts.svg';
import node from '../assets/img/node.svg';
import jest from '../assets/img/jest.svg';
import webpack from '../assets/img/webpack.svg';

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

export const hobbies: Hobby[] = [
  {
    title: 'Basketball',
    image: basketball,
  },
  {
    title: 'Billard ball',
    image: billard,
  },
  {
    title: 'Chinese Chess',
    image: chess,
  },
  {
    title: 'Singing',
    image: sing,
  },
  {
    title: 'Violin',
    image: violin,
  },
];

export const contactItems: ContactItem[] = [
  {
    icon: React.createElement(PhoneIcon, null, null),
    title: 'Phone',
    contact1: '(+886) 18851005762',
    contact2: '(+86) 0932347511',
  },
  {
    icon: React.createElement(EmailIcon, null, null),
    title: 'Email',
    contact1: '181250083@smail.nju.edu.cn',
    contact2: 'tristantree626@gmail.com',
  },
  {
    icon: React.createElement(LocationOnIcon, null, null),
    title: 'Current location',
    contact1: 'Nanjing University, Guluo campus, China',
  },
];

export const skillsSet: SkillAccordion[] = [
  {
    subject: 'Frontend',
    skills: [
      {
        icon: HTML,
        title: 'HTML5',
        width: '85%',
        text: '85%',
      },
      {
        icon: JS,
        title: 'JavaScript',
        width: '90%',
        text: '90%',
      },
      {
        icon: ts,
        title: 'TypeScript',
        width: '85%',
        text: '85%',
      },
      {
        icon: CSS,
        title: 'CSS3',
        width: '70%',
        text: '80%',
      },
      {
        icon: react,
        title: 'React.js',
        width: '87%',
        text: '87%',
      },
      {
        icon: vue,
        title: 'Vue.js',
        width: '80%',
        text: '80%',
      },
    ],
  },
  {
    subject: 'General Programming',
    skills: [
      {
        icon: java,
        title: 'Java',
        width: '80%',
        text: '80%',
      },
      {
        icon: cpp,
        title: 'C++',
        width: '75%',
        text: '75%',
      },
      {
        icon: python,
        title: 'Python',
        width: '83%',
        text: '83%',
      },
    ],
  },
  {
    subject: 'Test Libraries',
    skills: [
      {
        icon: jest,
        title: 'Jest',
        width: '85%',
        text: '85%',
      },
    ],
  },
  {
    subject: 'Server Side',
    skills: [
      {
        icon: node,
        title: 'Node.js',
        width: '87%',
        text: '87%',
      },
    ],
  },
  {
    subject: 'Others',
    skills: [
      {
        icon: webpack,
        title: 'Webpack',
        width: '73%',
        text: '73%',
      },
    ],
  },
];

export const education: Education[] = [
  {
    from: 2015,
    to: 2018,
    title: 'High School',
    subtitle: 'Taipei Municipal Jianguo High School',
    text: 'Graduated from No.1 ranked high school in Taiwan.',
  },
  {
    from: 2018,
    to: 2022,
    title: 'Undergraduate',
    subtitle: 'Nanjing University',
    text: 'Attended university at NJU Software Institute, pursued Bachelor degree of Engineering, majoring in Software Engineering.',
  },
];

export const work: Work[] = [
  {
    from: 2021,
    to: 2021,
    month: {
      start: 6,
      end: 8,
    },
    title: 'Microsoft Taiwan',
    subtitle: 'R&D full stack engineer (Internship)',
    text: 'Worked in Microsoft AIoT department as a R&D full stack intern.',
  },
  {
    from: 2022,
    to: 2022,
    month: {
      start: 7,
      end: 9,
    },
    title: 'Tencent 騰訊',
    subtitle: 'Front-end engineer (Internship)',
    text: 'Worked in Tencent, under Tencent Cloud / CSIG / International Business Group as a front-end engineer intern.',
  },
];

export const menuItems: MenuItem[] = [];
