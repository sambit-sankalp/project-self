import React, { FC } from 'react';

import ProjectCard from '../cards/ProjectCard';
import { projectData } from '@/content/project';
import SectionTitle from '../shared/SectionTitle';
// import SmallProjectCard from '../cards/SmallProjectCard';

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="w-full my-8 flex flex-col justify-center items-start"
    >
      <SectionTitle title="Projects" />
      {/* <div className="w-full grid grid-cols-2 gap-4"> */}
      {projectData.map((project) => (
        <ProjectCard key={project.title} data={project} />
      ))}
      {/* </div> */}
    </div>
  );
};

export default Projects;
