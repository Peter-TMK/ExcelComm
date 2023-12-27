// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./index.css";
import { useContext, useEffect } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
// import { sampleProducts } from "./data";
import { Outlet } from "react-router";
import { Store } from "./Store";

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>ExcelComm</Navbar.Brand>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>
            <a href="/cart" className="nav-link">
              Car
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>

      <footer>
        <div className="text-center">All rights reserved. 2023</div>
      </footer>
    </div>
  );
}

export default App;
