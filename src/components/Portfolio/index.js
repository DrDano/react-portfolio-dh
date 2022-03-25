import React, {useState} from 'react'

export default function Portfolio(props) {

  const [projects] = useState([
    {
      title: "Blog-Frog",
      description: "Blog Frog is a tech networking app that lends itself to people who work with technology and are looking for a custom networking solution.",
      photo: "blogfrog.jpg",
      projectDeployment: "https://frognetwork.herokuapp.com/",
      key: 0,
      projectRepo: "https://github.com/DrDano/Blog-Frog"
    }
  ])

  return (
    <>
      {projects.map((project, i) => (
        <div key={`div${project.key}`} className="p-2">
        <h2 key={`h${project.key}`}>{project.title}</h2>
        <p key={`p${project.key}`}>{project.description}</p>
        <img src={require(`../../assets/${project.photo}`)} href={project.projectDeployment} alt={project.title} key={`img${project.key}`} width="500" height="300"/>
        <a href={project.projectRepo} key={`anchor${project.key}`}>Project GitHub Repository</a>
        </div>
      ))}
    </>
  )
}
