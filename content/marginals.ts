import Github from 'public/github.svg';
import Linkedin from 'public/linkedin.svg';
import Email from 'public/email.svg';
import Twitter from 'public/twitter.svg';

export interface footerLinkInterface {
  icon: string;
  name: string;
  url: string;
}

interface headerInterface {
  name: string;
  imageUrl: string;
  resumeLink: string;
}

export const socialIcons: footerLinkInterface[] = [
  {
    icon: Twitter,
    name: 'Twitter',
    url: 'https://twitter.com/sambit_sankalp',
  },
  {
    icon: Github,
    name: 'Github',
    url: 'https://github.com/sambit-sankalp/',
  },
  {
    icon: Linkedin,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/sambit-sankalp/',
  },
  {
    icon: Email,
    name: 'Email',
    url: 'mailto:sambit.sankalp.official@gmail.com',
  },
];

export const headerData: headerInterface = {
  name: 'Sambit Sankalp',
  imageUrl:
    'https://res.cloudinary.com/sambitsankalp/image/upload/v1680622552/82284130_thuxay.png',
  resumeLink: '/resume.pdf',
};
