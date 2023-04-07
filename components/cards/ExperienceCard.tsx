import { experienceInterface } from '@/content/experience';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

type ExperienceCardProps = {
  data: experienceInterface;
};

const ExperienceCard: FC<ExperienceCardProps> = ({ data }) => {
  const {
    company,
    description,
    companyLogo,
    position,
    date,
    companyLink,
    technologies,
  } = data;
  return (
    <div className="w-full p-2 bg-[#f3f3f6] rounded-md mt-5">
      <div className="flex gap-4 items-start md:items-center">
        <Image
          src={companyLogo}
          alt={company}
          width={64}
          height={64}
          className="rounded-md"
        />
        <div className="w-full mb-2">
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <h3 className="font-bold">{position} </h3>
            <span className="text-sm md:text-base">{date}</span>
          </div>
          <Link
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underlined relative"
          >
            {company}
          </Link>
          <p className="hidden md:block text-sm">
            <strong>Technologies: </strong>
            {technologies.join(', ')}
          </p>
        </div>
      </div>
      <p className="md:hidden text-sm">
        <strong>Technologies: </strong>
        {technologies.join(', ')}
      </p>
      <ReactMarkdown className="ml-6 text-sm md:text-base mt-3 md:mt-0">
        {description}
      </ReactMarkdown>
    </div>
  );
};

export default ExperienceCard;
