import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavBar.css";
import Compta from "../Cours/Comptabilité/Compta"
import Finance from "../Cours/Finance/Finance"

const NavBarMB = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBarContent">
      <Router>
        <Navbar className="NavBarContent" light expand="md">
          <NavbarBrand>
            <Link className="linkTitleNavBar" to="/">
              LL Cours
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/Comptabilité">
                    Comptabilité
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/DroitFiscal">
                    Droit Fiscal
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/DroitDesSociétés">
                    Droit Des Sociétés
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/Finance">
                    Finance
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/Anglais">
                    Anglais
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/Comptabilité">
            <Compta />
          </Route>
          <Route path="/DroitFiscal">
          </Route>
          <Route path="/DroitDesSociétés">
          </Route>
          <Route path="/Finance">
            <Finance />
          </Route>
          <Route path="/Anglais">
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBarMB;
