import { SkillProps } from '@/content/skills';
import Image from 'next/image';
import React from 'react';
import { FC } from 'react';

const SkillCard: FC<SkillProps> = ({ name, svg }) => {
  return (
    <div className="w-20 md:w-28 mx-3 my-2 mb-4 bg-[#f3f3f6] rounded-lg drop-shadow-lg shadow-gray-500">
      <div className="flex flex-col items-center p-3">
        <Image
          src={svg}
          height={40}
          width={40}
          className="w-7 h-7 md:w-10 md:h-10"
          alt={name}
        />
        <h1 className="text-sm md:text-base mt-1 font-medium text-gray-900 dark:text-white">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default SkillCard;
