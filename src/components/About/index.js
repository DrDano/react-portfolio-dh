import React from "react";
// have email address visible
// employers wont fill out contact form (remove it)
// change font color for contrast across pages
// Possibly make the resume interactive

export default function AboutMe() {
  return (
    <div className="d-flex flex-col flex-wrap flex-lg-row" id="about-container">
      <h1 className="px-3">About Me</h1>
      <div id="about" className="d-flex flex-column flex-md-row">
        <>
          <a
            href="https://github.com/DrDano"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={require("../../assets/images/dh-portrait.png")}
              alt="portrait"
              width="130"
              height="130"
            ></img>
          </a>
        </>
        <>
          <p className="px-3 mx-2 code">
            Software developer with a background in medicine and medical
            education who aims to develop web applications that automate manual
            processes and make data more available. Natural mediator and good at
            guiding teams toward a goal. Experience in maintaining content
            management systems in both healthcare and wholesale.
            <br></br>
            A bit about me:
            I grew up in Arizona, and regularly took lots of trips into the
            desert. I love snow skiing, camping, and gaming with friends on the
            weekends. I got into programming because I love building things.
          </p>
        </>
      </div>
    </div>
  );
}
