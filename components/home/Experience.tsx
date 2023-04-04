import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import ExperienceCard from '../cards/ExperienceCard';
import { experienceData } from '@/content/experience';

const Experience = () => {
  return (
    <>
      <div className="w-full my-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl mb-3 font-bold text-gray-800">Experience</h1>
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.company} data={experience} />
        ))}
      </div>
    </>
  );
};

export default Experience;
