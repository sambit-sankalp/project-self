import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import { projectData } from '@/content/project';
import SectionTitle from '../shared/SectionTitle';

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="w-full my-8 flex flex-col justify-center items-start">
      <SectionTitle title="Projects" />
      {projectData.map((project) => (
        <ProjectCard key={project.title} data={project} />
      ))}
    </div>
  );
};

export default Projects;
