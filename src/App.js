import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./App.css";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import {  useHistory } from "react-router-dom";
import { onError } from "./libs/errorLib";

import Routes from "./Routes";




function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();
  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    history.push("/login");
  }
  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
  
    setIsAuthenticating(false);
  }
   return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          {isAuthenticated ? (
          <>
          <LinkContainer to="/settings">
                  <NavItem>Settings</NavItem>
                </LinkContainer>
          <NavItem onClick={handleLogout}>Logout</NavItem>
          </>  ) 
  : <>
      <LinkContainer to="/signup">
        <NavItem>Signup</NavItem>
      </LinkContainer>
      <LinkContainer to="/login">
        <NavItem>Login</NavItem>
      </LinkContainer>
    </>
}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;