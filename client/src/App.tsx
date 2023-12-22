// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./index.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
// import { sampleProducts } from "./data";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>ExcelComm</Navbar.Brand>
          </Container>
          <Nav>
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
