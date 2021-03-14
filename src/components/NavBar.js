import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import "./NavBar.css";

export const NavBar = ({ changeView }) => {
  return (
    <>
      <Navbar
        className="nav-bar"
        alignLinks="right"
        brand={
          <a className="brand-logo" href="/svportfolio">
            My Portfolio
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://drive.google.com/file/d/1WjGLGrdzHXpxXebvK6d0AMuO8UdC3XkW/view?usp=sharing"
          >
            Resume
          </a>
        </NavItem>
        <NavItem onClick={() => changeView("projects")}>Projects</NavItem>
        {/*<NavItem onClick={() => changeView("contact")}>Contact</NavItem> */}
      </Navbar>
    </>
  );
};

export default NavBar;
