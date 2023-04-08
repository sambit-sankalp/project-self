import React from 'react';

import { EducationCard } from '../cards/EducationCard';
import SectionTitle from '../shared/SectionTitle';

const Education = () => {
  return (
    <>
      <div id="education" className="w-full mt-8 flex flex-col justify-center items-start">
        <SectionTitle title="Education" />
      </div>
      <EducationCard />
    </>
  );
};

export default Education;
