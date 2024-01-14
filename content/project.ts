import { IconType } from 'react-icons';
import Github from 'public/github.svg';
import Globe from 'public/globe.svg';
import Playstore from 'public/playstore.svg';

export interface linkInterface {
  icon: any;
  name: string;
  url: string;
  width?: number;
  height?: number;
}

export interface experienceInterface {
  title: string;
  style: string;
  isWeb: boolean;
  image: string;
  deployLink: string;
  description: string;
  technologies: string[];
  links: linkInterface[];
}

export const projectData: experienceInterface[] = [
  {
    title: 'Project NFTDocket',
    style: 'normal',
    isWeb: true,
    image:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1680774766/nft_docket_jja3qb.png',
    description: `NFTDocket is a Decentralised Warranty Issue platform that can be used by sellers
     to dispatch their warranties to buyers via a NFT built using Polygon.`,
    deployLink: 'https://project-nft-docket.vercel.app/',
    technologies: ['React', 'Web3', 'Solidity', 'Polygon', 'Tailwind CSS'],
    links: [
      {
        icon: Github,
        name: 'Github',
        width: 20,
        height: 20,
        url: 'https://github.com/sambit-sankalp/project-nftdocket',
      },
      {
        icon: Globe,
        name: 'Website',
        width: 17,
        height: 17,
        url: 'https://project-nft-docket.vercel.app/',
      },
    ],
  },
  {
    title: 'Project Pegasus',
    style: 'reverse',
    isWeb: false,
    image:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1681042550/App_haksj4.png',
    description: `The cross-platform Mobile application of the Monday Morning which is a weekly
     e-newsletter serves as a news feed for the students, professors and alumni of the institute.`,
    deployLink:
      'https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning',
    technologies: ['Flutter', 'Riverpod', 'Firebase'],
    links: [
      {
        icon: Github,
        name: 'Github',
        width: 20,
        height: 20,
        url: 'https://github.com/Monday-Morning/project-pegasus',
      },
      {
        icon: Playstore,
        name: 'Playstore',
        width: 20,
        height: 20,
        url: 'https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning',
      },
    ],
  },
  {
    title: 'Project Tedx',
    style: 'normal',
    isWeb: true,
    image:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1681051186/Tedx_ahvmt6.png',
    description: `TEDxNITRourkela is an independently organized TED event 
    coordinated and curated by a group of NIT Rourkela students.`,
    deployLink: 'https://tedxnitrourkela.com/',
    technologies: ['React', 'Javascript'],
    links: [
      {
        icon: Github,
        name: 'Github',
        width: 20,
        height: 20,
        url: 'https://github.com/sambit-sankalp/website-v2',
      },
      {
        icon: Globe,
        name: 'Website',
        width: 18,
        height: 18,
        url: 'https://tedxnitrourkela.com/',
      },
    ],
  },
  {
    title: 'Project Pilot',
    style: 'reverse',
    isWeb: true,
    image:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1680775034/pilot_d5srpj.png',
    description: `Pilot is a decentralized Web3 Blogging platform built with Lens Protocol on
        Polygon; its main feature is that it gives users control over the information they
        carry with them throughout a Web3 internet.`,
    deployLink: 'https://pilot-two.vercel.app/',
    technologies: ['React', 'Draft.js', 'Material UI'],
    links: [
      {
        icon: Github,
        name: 'Github',
        width: 20,
        height: 20,
        url: 'https://github.com/sambit-sankalp/project-pilot',
      },
      {
        icon: Globe,
        name: 'Website',
        width: 18,
        height: 18,
        url: 'https://pilot-two.vercel.app/',
      },
    ],
  },
];
