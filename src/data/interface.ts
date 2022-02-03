import { I_Month } from '../components/Resume/ResumeItem/interface';

export interface Info {
  attr: string;
  value: string;
}

export interface Service {
  image: any;
  title: string;
  paragraph: string;
}

export interface Hobby {
  title: string;
  image: any;
}

export interface ContactItem {
  icon: JSX.Element;
  title: string;
  contact1: string;
  contact2?: string;
}

export interface Skill {
  icon: any;
  title: string;
  width: string;
  text: string;
}

export interface SkillAccordion {
  subject: string;
  skills: Skill[];
}

export interface Education {
  from: number;
  to: number;
  title: string;
  subtitle: string;
  text: string;
}

export interface Work extends Education {
  month: I_Month;
}

export interface MenuItem {
  id: string;
  image: string;
  link1: string;
  link2: string;
  title: string;
  text: string;
}
