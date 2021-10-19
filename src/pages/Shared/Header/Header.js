import { getAuth, signOut } from "@firebase/auth";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoginUser("");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <>
        <Navbar
          sticky="top"
          bg="dark"
          variant="dark"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home">
              <i class="fas fa-tooth"></i> Odontic Care
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>
              {loginUser?.email ? (
                <NavLink onClick={handleLogout} className="nav-link" to="/login">
                  logOut {""}
                  {loginUser?.displayName}
                </NavLink>
              ) : (
                <NavLink class="nav-link" to="/login">
                  login
                </NavLink>
              )}
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
