import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import ExperienceCard from '../cards/ExperienceCard';
import { experienceData } from '@/content/experience';
import SectionTitle from '../shared/SectionTitle';

const Experience = () => {
  return (
    <>
      <div className="w-full my-8 flex flex-col justify-center items-start">
        <SectionTitle title="Experience" />
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.company} data={experience} />
        ))}
      </div>
    </>
  );
};

export default Experience;
