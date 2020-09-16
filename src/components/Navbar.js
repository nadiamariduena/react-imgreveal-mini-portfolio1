import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <Link className="logo" to="/Home">
              <h3>FLUXUS</h3>
            </Link>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
