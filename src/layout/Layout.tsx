import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './Layout.css'
import Home from '../views/home/Home';
import Projects from '../views/projects/Projects';
import Certificates from '../views/certificates/Certificates';
import Contact from '../views/contact/Contact';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Project from '../views/project/Project';

const navLinkStyles = ({isActive}) => ({
  color: 'white',
  fontWeight : isActive ? 'bold' : 'normal',
  textDecoration: 'none'
});

export default function Layout() {
  return (
    <section className="layout">
      <BrowserRouter basename="/react-portfolio">
        <Navbar expand="lg" className="bg-dark navbar-dark fixed-top">
          <Container>
            <Navbar.Brand href="#home">React-Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <NavLink to="/" style={navLinkStyles}>Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/projects" style={navLinkStyles}>Projects</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/certificates" style={navLinkStyles}>Certificates</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section className="layout">
          <section className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<Project/> }/>
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>
        </section>
      </BrowserRouter>
    </section>
  );
}