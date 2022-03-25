import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"
import Resume from "./components/Resume"

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
            {tabSelected === "portfolio" && <Portfolio/>}
            {tabSelected === "resume" && <Resume/>}
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
