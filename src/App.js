import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Modal } from "react-bootstrap";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const [tabSelected, setTabSelected] = useState("");

  return (
    <div>
      <header>
        <Nav
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
        />
      </header>
      <main>
        {
          tabSelected !=="contact" ? (
            <>
            <Portfolio tabSelected={tabSelected}/>
            {/* <Resume /> */}
            </>
          ) : (
            <Contact Form={Form} Button={Button} />
          )
        }
      </main>
      <footer>Accounts</footer>
    </div>
  );
}

export default App;
