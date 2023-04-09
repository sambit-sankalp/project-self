import React from 'react';

import { EducationCard } from '../cards/EducationCard';
import SectionTitle from '../shared/SectionTitle';

const Education = () => {
  return (
    <div className="w-full">
      <div
        id="education"
        className="w-full mt-8 flex flex-col justify-center items-start"
      >
        <SectionTitle title="Education" />
      </div>
      <EducationCard />
    </div>
  );
};

export default Education;
