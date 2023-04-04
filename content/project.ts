import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { BsGlobe2, BsGithub } from 'react-icons/bs';

export interface linkInterface {
  icon: IconType;
  name: string;
  url: string;
}

export interface experienceInterface {
  title: string;
  style: string;
  image: string;
  deployLink: string;
  description: string;
  technologies: string[];
  links: linkInterface[];
}

export const projectData: experienceInterface[] = [
  {
    title: 'Project Pilot',
    style: 'flex-row',
    image:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1679481323/mondaymorning_ox9cb5.png',
    description: `Pilot is a decentralized Web3 Blogging platform built with Lens Protocol on
        Polygon; its main feature is that it gives users control over the information they
        carry with them throughout a Web3 internet.`,
    deployLink: 'https://pilot-two.vercel.app/',
    technologies: ['React', 'Draft.js', 'Material UI'],
    links: [
      {
        icon: BsGithub,
        name: 'Github',
        url: 'https://github.com/sambit-sankalp/project-pilot',
      },
      {
        icon: BsGlobe2,
        name: 'Website',
        url: 'https://pilot-two.vercel.app/',
      },
    ],
  },
  {
    title: 'Project NFTDocket',
    style: 'flex-row-reverse',
    image:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1680620598/nftdocket_sffsfb.png',
    description: `NFTDocket is a Decentralised Warranty Issue platform that can be used by sellers
     to dispatch their warranties to buyers via a NFT built using Polygon.`,
    deployLink: 'https://project-nft-docket.vercel.app/',
    technologies: ['React', 'Web3', 'Solidity', 'Polygon', 'Tailwind CSS'],
    links: [
      {
        icon: BsGithub,
        name: 'Github',
        url: 'https://github.com/Sibasis-Malla/project-NFTDocket',
      },
      {
        icon: BsGlobe2,
        name: 'Website',
        url: 'https://project-nft-docket.vercel.app/',
      },
    ],
  },
];
