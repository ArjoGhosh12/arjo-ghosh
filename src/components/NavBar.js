import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" fixed="top" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* Logo/Brand */}
          <Navbar.Brand href="/">
            <span className="brand-name">Arjo</span>
          </Navbar.Brand>

          {/* Hamburger Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          {/* Collapsible Nav */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>

            {/* Social Icons + Button */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/arjo-ghosh-23bb72254/" target="_blank" rel="noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61557489552083" target="_blank" rel="noreferrer">
                  <img src={navIcon2} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/i_am_arjo" target="_blank" rel="noreferrer">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
