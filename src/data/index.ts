import React from 'react';
import { Info, Service, Hobby, ContactItem } from './interface';
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
