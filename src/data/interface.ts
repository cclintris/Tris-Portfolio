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
