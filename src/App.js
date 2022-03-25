import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Modal } from "react-bootstrap";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"

function App() {
  const [tabSelected, setTabSelected] = useState("portfolio");

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
            {tabSelected === "portfolio" && <Portfolio tabSelected={tabSelected}/>}
            </>
          ) : (
            <Contact Form={Form} Button={Button} />
          )
        }
      </main>
      <footer className="d-flex justify-content-end">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
