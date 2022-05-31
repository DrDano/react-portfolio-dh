import React, { useState, useEffect } from "react";
const pinnedProjects = require("../../API/apiData");

export default function Portfolio() {
  const [projects, setProjects] = useState([
    {
      description: "description",
      key: 0,
      photo:
        "https://raw.githubusercontent.com/DrDano/react-portfolio-dh/main/src/assets/images/react-portfolio-dh.jpg",
      projectDeployment: "https://drdano.github.io/react-portfolio-dh/",
      projectRepo: "https://github.com/DrDano/react-portfolio-dh",
      technologies:
        "https://img.shields.io/badge/javascript-100-yellow?logo=javascript",
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

  return (
    <div id="project-container">
      {projects.slice(1).map((p) => (
        <div className="py-3" id="project-internals" key={`portfolio${p.key}`}>
          <h2 key={`h${p.key}`}>{p.title}</h2>
          <div key={`div${p.key}`} className="m-2 project p-2">
            <div className="project-details">
              <p key={`p${p.key}`} className="project-des mx-2 p-2">
                {p.description}
              </p>
              <div className="project-links" key={`links-${p.key}`}>
                {p.projectDeployment ? (
                  <a
                    href={p.projectDeployment}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-decoration-none project-link"
                  >
                    Deployment
                  </a>
                ) : (
                  <div className="text-dark">Project is not Deployed</div>
                )}
                <a
                  href={p.projectRepo}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={`anchor${p.key}`}
                  className="project-link text-decoration-none px-2"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <div>
              <img
                name={`project-image-${p.key}`}
                className="project-img"
                src={p.photo}
                alt={p.title}
                key={`img${p.key}`}
              />
            </div>
            <div>
              {
                <div className="project-technologies">
                  {[...p.technologies]
                    .slice(0, p.technologies.length - 1)
                    .map((p) => {
                      return (
                        <div className="tech-used">
                          <img src={p} className="tech-used-img"></img>
                        </div>
                      );
                    })}
                </div>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
