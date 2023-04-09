import { React, Next, Gatsby, CSS, JS, TS, Redux, JQuery } from '@/content/svg';

import cpp from 'public/cpp.svg';
import node from 'public/node.svg';
import express from 'public/express.svg';
import docker from 'public/docker.svg';
import mongo from 'public/mongo.svg';
import sql from 'public/sql.svg';
import github from 'public/githubcolor.svg';
import firebase from 'public/firebase.svg';
import flutter from 'public/flutter.svg';
import graphql from 'public/graphql.svg';
import apollo from 'public/apollo.svg';
import HTML from 'public/html.svg';

export interface SkillProps {
  name: string;
  svg: any;
}

export const skillsData: SkillProps[] = [
  {
    name: 'C++',
    svg: cpp,
  },
  {
    name: 'React',
    svg: React,
  },
  {
    name: 'Next.js',
    svg: Next,
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
    name: 'Gatsby',
    svg: Gatsby,
  },
  {
    name: 'Node.js',
    svg: node,
  },
  {
    name: 'Express.js',
    svg: express,
  },
  {
    name: 'Docker',
    svg: docker,
  },
  {
    name: 'Javascript',
    svg: JS,
  },
  {
    name: 'MongoDB',
    svg: mongo,
  },
  {
    name: 'SQL',
    svg: sql,
  },
  {
    name: 'Github',
    svg: github,
  },
  {
    name: 'Firebase',
    svg: firebase,
  },
  {
    name: 'Flutter',
    svg: flutter,
  },
  {
    name: 'HTML',
    svg: HTML,
  },
  {
    name: 'GraphQL',
    svg: graphql,
  },
  {
    name: 'Apollo',
    svg: apollo,
  },
  {
    name: 'CSS',
    svg: CSS,
  },
  {
    name: 'JQuery',
    svg: JQuery,
  },
];
