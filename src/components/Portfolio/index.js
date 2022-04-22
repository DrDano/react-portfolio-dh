import React, { useState } from "react";

export default function Portfolio() {
  const [projects] = useState([
    {
      title: "Beet-Hub",
      description:
        "Beethub is an interactive album-collection sharing experience. It is built for people who treat music as a lifestyle. Name and save collections, review albums from anywhere by clicking or tapping, and see other users' choices in real time. Beathub is integrated with Spotify, and has access to Spotify's full library of album artwork, artists, and more. There's no need to keep track of another subscription if you use BeetHub!",
      photo: "beet-hub-home.jpg",
      projectDeployment: "https://blooming-tundra-89879.herokuapp.com/",
      key: 0,
      projectRepo: "https://github.com/heatherviolet/beat-hub",
    },
    {
      title: "Blog-Frog",
      description:
        "Blog Frog is a tech networking app that lends itself to people who work with technology and are looking for a custom networking solution.",
      photo: "blogfrog.jpg",
      projectDeployment: "https://frognetwork.herokuapp.com/",
      key: 1,
      projectRepo: "https://github.com/DrDano/Blog-Frog",
    },
    {
      title: "The Allergy-Free Kitchen",
      description:
        "The Allergy-Free Kitchen is the app for you if you've ever been to a restaurant, taken that first bite and realized you've been poisoned yet again. The app is full of user-created recipes that list real ingredients and allergies together. Peruse around and take in all the smells and flavors.",
      photo: "AFK.jpg",
      projectDeployment: "https://afk-network.herokuapp.com/",
      key: 2,
      projectRepo:
        "https://github.com/JosephJamesCoop/the-allergy-free-kitchen",
    },
    {
      title: "Inter-App",
      description:
        "inter-App lends itself to any application looking to incorporate users, comments, and friends into their app. This is a simple-to-use design with a lot of power behind the curtain.",
      photo: "interApp.jpg",
      projectDeployment:
        "https://drive.google.com/file/d/1QQ-1rEx9wDw4cKdFj79J6T4CsCGT1IEI/preview",
      key: 3,
      projectRepo: "https://github.com/DrDano/inter-App",
    },
    {
      title: "Troph",
      description:
      "The app is the backend framework for an e-commerce website, and has routes readily generated through express.js. These routes are available to you within this package as Troph-Insomnia-Routes.json which you can import into your instance of Insomnia and readily use if you are running the application locally.",
      photo: "troph.jpg",
      projectDeployment:
        "https://drive.google.com/file/d/1u64l7Gk-p9cF_uWIHl2jp6EpVWYgbhS0/view?usp=sharing",
      key: 4,
      projectRepo: "https://github.com/DrDano/troph",
    },
    {
      title: "Notserver",
      description:
      "A note-taking application with a purely JSON database and express.js server-side framework. This app is intentionally simple to minimize distractions and give you a place to jot down your thoughts.",
      photo: "notserver.jpg",
      projectDeployment:
        "https://notserverdh.herokuapp.com/",
      key: 5,
      projectRepo: "https://github.com/DrDano/Notserver",
    },
    {
      title: "Employee-CMS",
      description:
      "A content-management system that runs entirely in your terminal, and can keep track of employee roles and salaries. All data storage is through mysql.",
      photo: "employee-cms.jpg",
      projectDeployment:
        "https://drive.google.com/file/d/11a58pZZFNrVH8xqF-J5EWmgiItJk_zGc/view?usp=sharing",
      key: 6,
      projectRepo: "https://github.com/DrDano/Employee-CMS",
    },
  ]);

  return (
    <>
      {projects.map((project) => (
        <div className="py-3" key={`portfolio${project.key}`}>
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
              width="500"
              height="300"
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
    </>
  );
}
