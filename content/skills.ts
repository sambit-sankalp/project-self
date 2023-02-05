import {
  React,
  Next,
  Gatsby,
  HTML,
  CSS,
  JS,
  TS,
  Redux,
  JQuery,
} from '@/content/svg';

export interface SkillProps {
  name: string;
  svg: string;
}

export const skillsData: SkillProps[] = [
  {
    name: 'React',
    svg: React,
  },
  {
    name: 'Next.js',
    svg: Next,
  },
  {
    name: 'Gatsby',
    svg: Gatsby,
  },
  {
    name: 'HTML',
    svg: HTML,
  },
  {
    name: 'CSS',
    svg: CSS,
  },
  {
    name: 'Javascript',
    svg: JS,
  },
  {
    name: 'Typescript',
    svg: TS,
  },
  {
    name: 'Redux',
    svg: Redux,
  },
  {
    name: 'JQuery',
    svg: JQuery,
  },
];
