import React, {useState} from 'react'

export default function Portfolio() {

  const [projects] = useState([
    {
      title: "Blog-Frog",
      description: "Blog Frog is a tech networking app that lends itself to people who work with technology and are looking for a custom networking solution.",
      photo: "blogfrog.jpg",
      projectDeployment: "https://frognetwork.herokuapp.com/",
      key: 0,
      projectRepo: "https://github.com/DrDano/Blog-Frog"
    },
    {
      title: "The Allergy-Free Kitchen",
      description: "The Allergy-Free Kitchen is the app for you if you've ever been to a restaurant, taken that first bite and realized you've been poisoned yet again. The app is full of user-created recipes that list real ingredients and allergies together. Peruse around and take in all the smells and flavors.",
      photo: "AFK.jpg",
      projectDeployment: "https://afk-network.herokuapp.com/",
      key: 1,
      projectRepo: "https://github.com/JosephJamesCoop/the-allergy-free-kitchen"
    },
    {
      title: "Inter-App",
      description: "inter-App lends itself to any application looking to incorporate users, comments, and friends into their app. This is a simple-to-use design with a lot of power behind the curtain.",
      photo: "interApp.jpg",
      projectDeployment: "https://drive.google.com/file/d/1QQ-1rEx9wDw4cKdFj79J6T4CsCGT1IEI/preview",
      key: 2,
      projectRepo: "https://github.com/DrDano/inter-App"
    },
  ])

  return (
    <>
      {projects.map((project) => (
        <div key={`div${project.key}`} className="m-2 d-flex project">
        <h2 key={`h${project.key}`}><a href={project.projectDeployment} rel="noopener noreferrer" target="_blank">{project.title}</a></h2>
        <p key={`p${project.key}`}>{project.description}</p>
        <img src={require(`../../assets/images/${project.photo}`)} alt={project.title} key={`img${project.key}`} width="500" height="300"/>
        <a href={project.projectRepo} rel="noopener noreferrer" target="_blank" key={`anchor${project.key}`}>Project GitHub Repository</a>
        </div>
      ))}
    </>
  )
}
