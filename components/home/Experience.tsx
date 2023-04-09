import React from 'react';

import ExperienceCard from '../cards/ExperienceCard';
import { experienceData } from '@/content/experience';
import SectionTitle from '../shared/SectionTitle';

const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="w-full my-8 mt-12 flex flex-col justify-center items-start"
      >
        <SectionTitle title="Experience" />
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.company} data={experience} />
        ))}
      </div>
    </>
  );
};

export default Experience;
