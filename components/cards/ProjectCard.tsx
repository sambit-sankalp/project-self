import { experienceInterface } from '@/content/project';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BsGlobe2, BsGithub } from 'react-icons/bs';

type ProjectDataProps = {
  data: experienceInterface;
};

const ProjectCard = ({ data }: ProjectDataProps) => {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
  ];
  const links = [
    {
      icon: <BsGithub />,
      name: 'Github',
      url: 'https://github.com/Monday-Morning/project-tahiti',
    },
    {
      icon: <BsGlobe2 />,
      name: 'Website',
      url: 'https://mondaymorning.nitrkl.ac.in/',
    },
  ];
  return (
    <div className="w-full flex justify-center my-3 items-center min-h-[400px] overflow-hidden bg-[#f3f3f6] rounded-md ">
      <div
        className={`w-full min-w-[800px] flex ${
          data.style
        } justify-between items-start gap-20 ${
          data.style === 'flex-row' ? 'mr-80' : 'ml-80'
        }`}
      >
        <Image src={data.image} alt={data.title} width={500} height={500} />
        <div className="w-full flex flex-col justify-between items-start mt-0 min-w-[50%]">
          <Link
            href={data.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underlined relative"
          >
            <h3 className="font-bold text-[40px]">{data.title}</h3>
          </Link>
          <p className="text-base mt-2">{data.description}</p>
          <p className="mt-4">
            {skills.map((skill, index) => (
              <span
                key={`${index}-${skill}`}
                className="mr-2 my-1 text-sm inline-flex items-center font-bold leading-sm px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </p>
          <div className="flex justify-center items-center mt-4">
            {links.map(({ name, url, icon }, index) => (
              <React.Fragment key={`${url}-${index}`}>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full"
                >
                  {icon}
                  <p className="mx-2">{name}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
