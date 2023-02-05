import React, { FC } from 'react';
import Marquee from 'react-fast-marquee';
import SkillCard from '@/components/skills/SkillCard';
import { skillsData } from '@/content/skills';

const Skills: FC = () => {
  const talkAbout: string[] = [
    'React',
    'JavaScript',
    'TypeScript',
    'GraphQL',
    'Redux',
    'Jamstack',
    'Next.js',
    'RESTful APIs',
    'HTML',
    'CSS',
    'Gatsby',
    'Svelte',
    'Svelte',
    'Svelte',
    'Svelte',
    'Svelte',
  ];
  return (
    <div className="w-full mt-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-3 font-bold text-gray-800">Skills</h1>
      <div className="mx-auto w-full px-4 md:max-w-5xl">
        <Marquee
          gradient={false}
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map(({ name, svg }, index) => (
            <SkillCard key={index} name={name} svg={svg} />
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skillsData.map(({ name, svg }, index) => (
            <SkillCard key={index} name={name} svg={svg} />
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map(({ name, svg }, index) => (
            <SkillCard key={index} name={name} svg={svg} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
