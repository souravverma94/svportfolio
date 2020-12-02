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
          <a className="brand-logo" href="">
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
        <NavItem onClick={() => changeView("resume")}>Resume</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </Navbar>
    </>
  );
};

export default NavBar;
