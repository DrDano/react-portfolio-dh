import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import About from "./components/About";

function App() {
  const [tabSelected, setTabSelected] = useState("portfolio");

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Patua+One&family=Press+Start+2P&family=Staatliches&display=swap"
        rel="stylesheet"
      ></link>
      <header>
        <Nav tabSelected={tabSelected} setTabSelected={setTabSelected} />
      </header>
      <main>
        {tabSelected !== "contact" ? (
          <>
            {tabSelected === "portfolio" && <Portfolio />}
            {tabSelected === "resume" && <Resume />}
            {tabSelected === "about" && <About />}
          </>
        ) : (
          <Contact Form={Form} Button={Button} />
        )}
      </main>
      <footer className="d-flex justify-content-end">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
