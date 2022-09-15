import { Component } from "react";
import {  Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/client"} className="navbar-brand">
            TRANS
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/client"} className="nav-link">
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/car"} className="nav-link">
                Car
              </Link>
            </li>
          </div>
        </nav>      
      </div>
    );
  }
}
export default App;
