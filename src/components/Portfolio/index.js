import React, { useState, useEffect } from "react";
import pinnedProjects from "../../API/apiData";

export default function Portfolio() {
  const [projects, setProjects] = useState([
    {
      description: "description",
      key: 0,
      photo:
        "https://raw.githubusercontent.com/DrDano/react-portfolio-dh/main/src/assets/images/react-portfolio-dh.jpg",
      projectDeployment: "https://drdano.github.io/react-portfolio-dh/",
      projectRepo: "https://github.com/DrDano/react-portfolio-dh",
      technologies: 0,
      title: "react-portfolio-dh",
    },
  ]);
  useEffect(() => {
    const getPins = async () => {
      const response = await pinnedProjects();
      setProjects(response);
    };
    getPins().catch(console.error);
  }, []);

  console.log(projects);

  return (
    <div id="project-container">
      {projects.map((p) => (
        <div className="py-3" id="project-internals" key={`portfolio${p.key}`}>
          <h2 key={`h${p.key}`}>
            <a
              href={p.projectDeployment}
              rel="noopener noreferrer"
              target="_blank"
              className="text-decoration-none project-header"
            >
              {p.title}
            </a>
          </h2>
          <div key={`div${p.key}`} className="m-2 d-flex project p-2">
            <p key={`p${p.key}`} className="project-des mx-2 p-2">
              {p.description}
            </p>
            <img
              src={p.photo}
              alt={p.title}
              key={`img${p.key}`}
            />
            <a
              href={p.projectRepo}
              rel="noopener noreferrer"
              target="_blank"
              key={`anchor${p.key}`}
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
