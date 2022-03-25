import React, {useState} from 'react'

export default function Portfolio(props) {
  const { contactSelected, projectArr } = props;

  const [projects] = useState([
    {
      title: "Blog-Frog",
      description: "Blog Frog is a tech networking app that lends itself to people who work with technology and are looking for a custom networking solution.",
      photoPath: "../../assets/images/blogfrog.jpg",
      projectDeployment: "https://frognetwork.herokuapp.com/",
      projectKey: "0",
      projectRepo: "https://github.com/DrDano/Blog-Frog"
    }
  ])

  return (
    <>
    {contactSelected == 2 && 
    <section>
      {projects.map((project) => {
        <>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.photoPath} href={project.projectDeployment} alt={project.title} key={project.projectKey}/>
        <a src={project.projectRepo}>Project GitHub Repository</a>
        </>
      })}
    </section>
    }
    </>
  )
}
