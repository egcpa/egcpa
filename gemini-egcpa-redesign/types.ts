
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  location: string;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Careers = 'careers',
  Contact = 'contact'
}
