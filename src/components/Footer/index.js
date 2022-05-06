import React, {useState} from 'react'

export default function Footer() {
    const [elements] = useState([
        {
            title: "GitHub",
            icon: "github-rounded-medium.png",
            url: "https://github.com/DrDano"
        },
        {
            title: "LinkedIn",
            icon: "linkedin-rounded-medium.png",
            url: "https://www.linkedin.com/in/daniel-harned/"
        },
        {
            title: "Stack Overflow",
            icon: "stackoverflow-rounded-medium.png",
            url: "https://stackexchange.com/users/22730166/drdano"
        },
        {
            title: "Email",
            icon: "email-rounded-medium.png",
            url: "mailto:danielharned@gmail.com"
        }
    ]);

  return (
    <>
    {elements.map((element, i) => (
        <div key={"div" + i}>
            <a href={element.url} rel="noopener noreferrer" target="_blank" key={"anchor" + i}>
            <img src={require(`../../assets/icons/${element.icon}`)} alt={element.title} key={element.title + i}></img>
            </a>
        </div>
    ))}
    <a href="mailto:danielharned@gmail.com" rel="noopener noreferrer" target="_blank">danielharned@gmail.com</a>
    </>
  )
}
