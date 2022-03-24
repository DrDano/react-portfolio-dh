import React from 'react'

export default function Portfolio(props) {
  const { contactSelected, projectArr } = props;

  

  return (
    <>
    {contactSelected === 2 && 
    <section>
      {projectArr.map((project) => {
        <>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={photoPath} href={projectDeployment} alt={project.name} key={projectKey}/>
        <a src={projectRepo}>Project GitHub Repository</a>
        </>
      })}
    </section>
    }
    </>
  )
}
