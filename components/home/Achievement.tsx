import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import AchievementCard from '../cards/AchievementCard';
import { achivement } from '@/content/achievement';

type Props = {};

const Achievement = () => {
  return (
    <>
      <div className="w-full mt-8 flex flex-col justify-center items-start">
        <SectionTitle title="Achivements" />
      </div>
      {achivement.map((data, index) => (
        <AchievementCard key={index} {...data} />
      ))}
    </>
  );
};

export default Achievement;
