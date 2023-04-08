import React, { FC, RefObject } from 'react';

import ProjectCard from '../cards/ProjectCard';
import { projectData } from '@/content/project';
import SectionTitle from '../shared/SectionTitle';

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="w-full my-8 flex flex-col justify-center items-start"
    >
      <SectionTitle title="Projects" />
      {projectData.map((project) => (
        <ProjectCard key={project.title} data={project} />
      ))}
    </div>
  );
};

export default Projects;
