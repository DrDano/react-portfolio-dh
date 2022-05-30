import React from "react";

export default function Nav(props) {
  const { tabSelected, setTabSelected } = props;

  return (
    <nav>
      <div className="d-flex m-3 main-font" id="nav-intro">
        <h3>Daniel Harned</h3>
        <p className="mx-2 text-center code">Full Stack Developer</p>
      </div>
      <ul className="nav d-flex p-2 justify-content-around">
        <li className={`nav-item btn ${tabSelected === "about" && "btn-active"}`} key="nav-btn-1">
          <a
            href="#About"
            className="btn"
            onClick={() => setTabSelected("about")}
          >
            <span>About Me</span>
          </a>
        </li>
        <li
          className={`nav-item p-2-sm btn ${tabSelected === "contact" && "btn-active"}`} key="nav-btn-2"
        >
          <span onClick={() => setTabSelected("contact")}>Contact</span>
        </li>
        <li
          className={`nav-item p-2-sm btn ${tabSelected === "portfolio" && "btn-active"}`} key="nav-btn-3"
        >
          <span onClick={() => setTabSelected("portfolio")}>Portfolio</span>
        </li>
        <li className={`nav-item p-2-sm btn ${tabSelected === "resume" && "btn-active"}`} key="nav-btn-4">
          <span onClick={() => setTabSelected("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}
