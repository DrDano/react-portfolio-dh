import React, { useState } from "react";
import pinnedProjects from "../../API/apiData";

export default function Portfolio() {
  const [projects] = useState(pinnedProjects);

  return (
    <div id="project-container">
      {projects.map((project) => (
        <div className="py-3" id="project-internals" key={`portfolio${project.key}`}>
          <h2 key={`h${project.key}`}>
            <a
              href={project.projectDeployment}
              rel="noopener noreferrer"
              target="_blank"
              className="text-decoration-none project-header"
            >
              {project.title}
            </a>
          </h2>
          <div key={`div${project.key}`} className="m-2 d-flex project p-2">
            <p key={`p${project.key}`} className="project-des mx-2 p-2">{project.description}</p>
            <img
              src={require(`../../assets/images/${project.photo}`)}
              alt={project.title}
              key={`img${project.key}`}
            />
            <a
              href={project.projectRepo}
              rel="noopener noreferrer"
              target="_blank"
              key={`anchor${project.key}`}
              className="project-gh text-decoration-none px-2"
            >
              Project GitHub Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
