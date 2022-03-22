import React from 'react'

export default function NavC(props) {
const { Nav } = props

  return (
    <nav>
        <ul className="nav d-flex p-2 justify-content-around">
            <li className="nav-item">
                <a
                href="#About"
                className="btn"
                >About Me</a>
            </li>
            <li className="nav-item p-2 btn">
                Contact
            </li>
            <li className="nav-item p-2 btn">
                Portfolio
            </li>
            <li className="nav-item p-2 btn">
                Resume
            </li>
        </ul>
    </nav>
  )
}
