import React from "react";

export default function Nav(props) {
  const { contactSelected, setContactSelected } = props;

  return (
    <nav>
      <ul className="nav d-flex p-2 justify-content-around">
        <li className="nav-item">
          <a
            href="#About"
            className="btn"
            onClick={() => setContactSelected(0)}
          >
            About Me
          </a>
        </li>
        <li className={`nav-item p-2 btn ${contactSelected && "btn-active"}`}>
          <span onClick={() => setContactSelected(1)}>Contact</span>
        </li>
        <li className="nav-item p-2 btn" onClick={() => setContactSelected(2)}>
          Portfolio
        </li>
        <li className="nav-item p-2 btn" onClick={() => setContactSelected(3)}>Resume</li>
      </ul>
    </nav>
  );
}
