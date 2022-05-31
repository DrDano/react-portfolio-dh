import React from "react";

export default function Nav(props) {
  const { tabSelected, setTabSelected } = props;

  return (
    <>
    <nav>
      <div className="d-flex m-3 main-font" id="nav-intro">
        <h3>Daniel Harned</h3>
        <p className="mx-2 text-center code">Full Stack Developer</p>
      </div>
      <ul className="nav d-flex m-2">
        <li className={`nav-item btn mx-2 ${tabSelected === "about" && "btn-active"}`} key="nav-btn-1">
        <span onClick={() => setTabSelected("about")}>About Me</span>
        </li>
        {/* <li
          className={`nav-item p-2-sm btn mx-2 ${tabSelected === "contact" && "btn-active"}`} key="nav-btn-2"
        >
          <span onClick={() => setTabSelected("contact")}>Contact</span>
        </li> */}
        <li
          className={`nav-item p-2-sm btn mx-2 ${tabSelected === "portfolio" && "btn-active"}`} key="nav-btn-3"
        >
          <span onClick={() => setTabSelected("portfolio")}>Portfolio</span>
        </li>
        <li className={`nav-item p-2-sm btn mx-2 ${tabSelected === "resume" && "btn-active"}`} key="nav-btn-4">
          <span onClick={() => setTabSelected("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
    <div className="mx-3" id="email">
      danielharned@gmail.com
    </div>
    </>
  );
}
