import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container,} from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function MainNav() {
  const [searchField, setSearchField] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  function submitForm(e) {
    e.preventDefault();
    setIsExpanded(false);
    router.push(`/artwork?title=true&q=${searchField}`);
  }

  function handleNavClick() {
    setIsExpanded(false);
  }

  function toggleNavbar() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
        expanded={isExpanded}
      >
        <Container>
          <Navbar.Brand
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Arshnoor Kaur
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
          <Navbar.Collapse>
            <Nav className="me-auto" onClick={handleNavClick}>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/"}>Home</Nav.Link> 
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/search"}>Advanced Search</Nav.Link>
              </Link>
            </Nav>

            &nbsp;

            <Form className="d-flex" onSubmit={submitForm}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
              />
              <Button
                type="submit"
                variant="light"
                style={{
                  backgroundColor: "teal",
                  color: "white",
                  border: "1px solid teal",
                }}
              >
                Search
              </Button>
            </Form>

            &nbsp;

            {/* User Name Dropdown */}
            <Nav>
              <NavDropdown title="Explore" id="user-nav-dropdown" align="end">
                <Link href="/favourites" passHref legacyBehavior>
                  <NavDropdown.Item active={router.pathname === "/favourites"}>
                    Favourites
                  </NavDropdown.Item>
                </Link>
                <Link href="/history" passHref legacyBehavior>
                  <NavDropdown.Item active={router.pathname === "/history"}>
                    Search History
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
