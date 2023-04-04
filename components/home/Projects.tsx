import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import { projectData } from '@/content/project';

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="w-full my-8 flex flex-col justify-center items-start">
      <h1 className="text-3xl mb-3 font-bold text-gray-800">Projects</h1>
      {projectData.map((project) => (
        <ProjectCard key={project.title} data={project} />
      ))}
    </div>
  );
};

export default Projects;
