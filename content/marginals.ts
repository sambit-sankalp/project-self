import React from 'react';
import { BsGlobe2, BsGithub } from 'react-icons/bs';
import Github from 'public/github.svg';
import Linkedin from 'public/linkedin.svg';
import Email from 'public/email.svg';

export interface footerLinkInterface {
  icon: string;
  name: string;
  url: string;
}

export const socialIcons: footerLinkInterface[] = [
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
