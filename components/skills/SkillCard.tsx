import { SkillProps } from '@/content/skills';
import Image from 'next/image';
import React from 'react';
import { FC } from 'react';

const SkillCard: FC<SkillProps> = ({ name, svg }) => {
  return (
    <div className="w-28 mx-3 my-2 mb-4 bg-[#f3f3f6] rounded-lg drop-shadow-lg shadow-gray-500">
      <div className="flex flex-col items-center p-3">
        {/* <div dangerouslySetInnerHTML={{ __html: svg }} /> */}
        <Image src={svg} height={40} width={40} alt={name} />
        <h1 className="text-lg mt-1 font-medium text-gray-900 dark:text-white">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default SkillCard;
