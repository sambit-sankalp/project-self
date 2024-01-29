import React, { FC, use, useEffect, useState } from 'react';

import ProjectCard from '../cards/ProjectCard';
import { projectData, projectInterface } from '@/content/project';
import SectionTitle from '../shared/SectionTitle';
import SmallProjectCard from '../cards/SmallProjectCard';

const Projects: FC = () => {
  const [selectedTags, setselectedTags] = useState<string[]>([]);
  const [requiredData, setrequiredData] = useState<projectInterface[]>([]);
  const [isDesktop, setisDesktop] = useState(true);
  const tags = ['Web', 'App', 'ML'];

  useEffect(() => {
    let mQuery: MediaQueryList;
    if (typeof window !== 'undefined') {
      mQuery = window.matchMedia('(min-width: 768px)');
      setisDesktop(mQuery.matches);
    }
  }, []);

  useEffect(() => {
    setrequiredData(
      projectData.filter((project) => {
        if (selectedTags.length === 0) return true;
        return selectedTags
          .map((tag) => project.categories.includes(tag))
          .reduce((a, b) => a || b, false);
      })
    );
  }, [selectedTags]);

  return (
    <div
      id="projects"
      className="w-full my-8 flex flex-col justify-center items-start"
    >
      <SectionTitle title="Projects" />
      <div className="flex justify-center items-center">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`bg-transparent mr-3 py-1 px-4 text-sm md:text-base rounded-md border border-black hover:bg-black cursor-pointer hover:text-white ${
              selectedTags.includes(tag)
                ? 'bg-black text-white'
                : 'bg-transparent text-black'
            }`}
            onClick={() => {
              if (selectedTags.includes(tag)) {
                setselectedTags(selectedTags.filter((t) => t !== tag));
              } else {
                setselectedTags([...selectedTags, tag]);
              }
            }}
          >
            {tag}
          </div>
        ))}
      </div>
      {(requiredData.length > 4 && isDesktop
        ? requiredData.slice(0, 4)
        : requiredData
      ).map((project, index) => (
        <ProjectCard
          key={project.title}
          data={project}
          style={index % 2 === 0 ? 'normal' : 'reverse'}
        />
      ))}
      <div className="w-full grid grid-cols-2 gap-4">
        {(requiredData.length > 4 && isDesktop
          ? requiredData.slice(4, requiredData.length)
          : []
        ).map((project, index) => (
          <SmallProjectCard key={project.title} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
