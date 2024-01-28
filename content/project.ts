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

export interface projectInterface {
  title: string;
  isWeb: boolean;
  deviceImage: string;
  normalImage: string;
  deployLink: string;
  categories: string[];
  description: string;
  technologies: string[];
  links: linkInterface[];
}

export const projectData: projectInterface[] = [
  {
    title: 'Project PhoenixFi',
    isWeb: true,
    deviceImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705746528/personal/DevicePhoenixfi_cnjkg4.png',
    normalImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705746528/personal/normalPhoemixfi_hx5vi0.png',
    description: `PhoenixFi revolutionizes FileCoin with innovative lending, ML reputation prediction, collateral modeling, and a robust reward system to prevent loan defaults.`,
    deployLink: 'https://phoneixfi.vercel.app/',
    categories: ['Web', 'Web3'],
    technologies: ['React', 'Web3', 'Lilypad', 'ML', 'Tailwind CSS'],
    links: [
      {
        icon: Github,
        name: 'Github',
        width: 20,
        height: 20,
        url: 'https://github.com/sambit-sankalp/phoneixfi',
      },
      {
        icon: Globe,
        name: 'Website',
        width: 17,
        height: 17,
        url: 'https://phoneixfi.vercel.app/',
      },
    ],
  },
  {
    title: 'Project Pegasus',
    isWeb: false,
    deviceImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1681042550/App_haksj4.png',
    normalImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705748642/NormalPegasus_pk1cfm.png',
    categories: ['App'],
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
    title: 'Eye State Classification',
    isWeb: true,
    deviceImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705847185/deviceEyeState_o9xlix.png',
    normalImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705847185/normalEyeState_gx2ydf.png',
    categories: ['ML'],
    description: `Eye state classification using EEG signals leverages advanced models like Multilayer Perceptron, achieving high accuracy and precision for real-time applications.`,
    deployLink:
      'https://colab.research.google.com/drive/1dm-L7naasFbmbDVj9dpKI1i8csy7GOgc?usp=sharing',
    technologies: [
      'Python',
      'Deep Learning',
      'Keras',
      'MLP',
      'SVM',
      'Logistic Regression',
    ],
    links: [
      {
        icon: Github,
        name: 'Github',
        width: 20,
        height: 20,
        url: 'https://github.com/sambit-sankalp/project-eye-state',
      },
      // {
      //   icon: Globe,
      //   name: 'Website',
      //   width: 18,
      //   height: 18,
      //   url: 'https://tedxnitrourkela.com/',
      // },
    ],
  },
  {
    title: 'Project NFTDocket',
    isWeb: true,
    deviceImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1680774766/nft_docket_jja3qb.png',
    normalImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705746676/deviceNFTDocket_e8mgsb.png',
    categories: ['Web', 'Web3'],
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
    title: 'Reputation Model Script',
    isWeb: true,
    deviceImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705942377/personal/devicereputation_n1cg6s.png',
    normalImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705942373/personal/normalReputation_x6kf4x.png',
    categories: ['ML', 'Scripting'],
    description: `Advanced ML algorithms predict reputation and collateral demand, automating risk mitigation in FileCoin Network's staking ecosystem through a shell script.`,
    deployLink: 'https://github.com/sambit-sankalp/lilypadscript',
    technologies: [
      'Python',
      'Shell Scripting',
      'Sklearn',
      'Random Forest',
      'Beautiful Soup',
      'Lilypad',
    ],
    links: [
      {
        icon: Github,
        name: 'Github',
        width: 20,
        height: 20,
        url: 'https://github.com/sambit-sankalp/lilypadscript',
      },
      // {
      //   icon: Globe,
      //   name: 'Website',
      //   width: 18,
      //   height: 18,
      //   url: 'https://tedxnitrourkela.com/',
      // },
    ],
  },
  {
    title: 'Project Tedx',
    isWeb: true,
    deviceImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1681051186/Tedx_ahvmt6.png',
    normalImage:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1705747150/normalTedx_cvtena.png',
    categories: ['Web'],
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
  // {
  //   title: 'Project Pilot',
  //   isWeb: true,
  //   image:
  //     'https://res.cloudinary.com/sambitsankalp/image/upload/v1680775034/pilot_d5srpj.png',
  //   description: `Pilot is a decentralized Web3 Blogging platform built with Lens Protocol on
  //       Polygon; its main feature is that it gives users control over the information they
  //       carry with them throughout a Web3 internet.`,
  //   deployLink: 'https://pilot-two.vercel.app/',
  //   technologies: ['React', 'Draft.js', 'Material UI'],
  //   links: [
  //     {
  //       icon: Github,
  //       name: 'Github',
  //       width: 20,
  //       height: 20,
  //       url: 'https://github.com/sambit-sankalp/project-pilot',
  //     },
  //     {
  //       icon: Globe,
  //       name: 'Website',
  //       width: 18,
  //       height: 18,
  //       url: 'https://pilot-two.vercel.app/',
  //     },
  //   ],
  // },
];
