import { experienceInterface } from '@/content/project';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectDataProps = {
  data: experienceInterface;
};

const ProjectCard = ({ data }: ProjectDataProps) => {
  return (
    <div className="w-full flex justify-center my-3 p-3 md:p-0 items-center min-h-[400px] overflow-hidden bg-[#f3f3f6] rounded-md ">
      <div
        className={`w-full md:min-w-[800px] flex ${
          data.style
        } justify-center md:justify-between items-center md:items-start gap-5 md:gap-20 ${
          data.style === 'normal'
            ? 'mr-0 md:mr-52 lg:mr-80 flex-col md:flex-row '
            : 'ml-0 md:ml-52 lg:ml-80 flex-col md:flex-row-reverse'
        }`}
      >
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={500}
          className="w-[250px] md:w-[400px] lg:w-[500px]"
        />
        <div className="w-full flex flex-col justify-center md:justify-between items-center md:items-start mt-0 min-w-[50%]">
          <Link
            href={data.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underlined relative"
          >
            <h3 className="font-bold text-2xl lg:text-[30px]">{data.title}</h3>
          </Link>
          <p className="text-sm lg:text-base mt-2 mx-3 text-center md:text-left md:mx-0">
            {data.description}
          </p>
          <p className="mt-4 mx-2 md:mx-0 flex justify-center md:justify-start items-center md:items-start flex-wrap">
            {data.technologies.map((skill, index) => (
              <span
                key={`${index}-${skill}`}
                className="mr-2 my-1 text-xs lg:text-sm inline-flex items-center font-bold leading-sm px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </p>
          <div className="flex justify-center items-center mt-4">
            {data.links.map(({ name, url, icon }, index) => (
              <React.Fragment key={`${url}-${index}`}>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full"
                >
                  <Image
                    src={icon}
                    className="mx-2"
                    alt={name}
                    width={19}
                    height={19}
                  />
                  <p className="ml-0.5 text-xs md:text-base">{name}</p>
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
                    className="feather feather-arrow-right hidden md:block"
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
