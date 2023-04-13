import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';

import { AchievementProps } from '@/content/achievement';
import award from 'public/award.svg';

const AchievementCard: FC<AchievementProps> = ({ title, event, date, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="w-full">
      <div className="group/item w-full p-3 my-1 sm:py-4 bg-[#f3f3f6] rounded-md border border-transparent hover:border hover:border-black hover:cursor-pointer">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={award}
              className="w-10 h-10"
              alt="award"
              width={21}
              height={21}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base md:text-lg font-bold text-gray-900">
              {title}
            </p>
            <p className="text-sm font-semibold text-gray-500">
              {event}
            </p>
          </div>
          <div className="group/edit visible inline-flex items-center text-base font-semibold text-gray-900 group-hover/item:invisible">
            <p className="text-sm md:text-base text-gray-900">
              {date}
            </p>
          </div>
          <div className="group/edit invisible inline-flex items-center text-base font-semibold text-gray-900 group-hover/item:visible">
            <AiOutlineRight className="mr-2" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default AchievementCard;
