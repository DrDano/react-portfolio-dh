import "./index.css";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl } from "react-bootstrap"
import Nav from "./components/Nav";
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <header>
        <Nav/>
        <Contact FormControl={FormControl}/>
      </header>
      <main>projects</main>
      <footer>Accounts</footer>
    </div>
  );
}

export default App;
