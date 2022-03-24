import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Modal } from "react-bootstrap";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const [contactSelected, setContactSelected] = useState(0);

  return (
    <div>
      <header>
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        />
      </header>
      <main>
        {
          contactSelected === 0 ? (
            <>
            <Portfolio />
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
