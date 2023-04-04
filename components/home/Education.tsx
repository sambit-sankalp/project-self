import React from 'react';
import { About } from '../cards/EducationCard';

type Props = {};

const Education = (props: Props) => {
  return (
    <>
      <div className="w-full mt-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl mb-3 font-bold text-gray-800">Experience</h1>
      </div>
      <About />
    </>
  );
};

export default Education;
