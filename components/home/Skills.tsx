import React, { FC } from 'react';
import Marquee from 'react-fast-marquee';
import SkillCard from '@/components/skills/SkillCard';
import { skillsData } from '@/content/skills';
import SectionTitle from '../shared/SectionTitle';

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
    <div className="w-full mt-8 flex flex-col justify-center items-start">
      <SectionTitle title="Skills" />
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
