import React from "react";
import Image from "next/image";
import { projects } from "@/database/projects";
import Link from "next/link";

const Projects: React.FC = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex border border-gray-800 rounded-lg p-14 max-w-7xl justify-center m-auto flex-wrap gap-8">
      {projects.map((project) => (
        <div key={project.id} className="border border-gray-800 rounded-lg p-4 flex gap-4">
          <div>
            <Image src={project.print} alt={project.name} width={300} height={200} className=" w-96 max-w-sm"/>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            
            <p className=" text-2xl font-bold ">{project.name}</p>
            
            <p>{project.description}</p>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            {project.deploy ? (
                <Link className="px-12 bg-primary-100 py-2 rounded-md w-full max-w-xs text-center hover:bg-primary-200" href={project.deploy} target="_blank">
                Visualizar
                </Link>
            ) :  <p className="px-12 bg-primary-200 py-2 rounded-md w-full max-w-xs text-center">Visualizar</p> }
          
            <Link className="px-12 bg-primary-100 py-2 rounded-md w-full max-w-xs text-center  hover:bg-primary-200" href={project.repository}  target="_blank">
                Repositório
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
