/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
} from "reactstrap";

const AuthNavbar = () => {
  const location = useLocation();
  return (
    <>
      <header className="black--header">
        <Row>
          <Col md="4" xl="4">
            <Nav>
              <UncontrolledDropdown nav>
                <DropdownToggle nav className="dropdownMenuBtn">
                  <img
                    alt="Logo"
                    src={require("assets/img/theme/icon-burger.png").default}
                  />
                </DropdownToggle>
                <DropdownMenu
                  aria-labelledby="navbar-default_dropdown_1"
                  className="sub-dropdownmenu p-2"
                >
                  <DropdownItem>
                    <NavLink className="nav-link-icon" to="/web/login" tag={Link}>
                      Sign In
                      <i className="fa fa-sign-in-alt pull-right"></i>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link-icon" to="/web/register" tag={Link}>
                      Register
                      <i className="fa fa-edit pull-right"></i>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Col>
          <Col md="4" xl="4" className="text-center">
            {location.pathname !== '/web/login' && location.pathname !== '/web/world' ?
              <NavbarBrand to="/" tag={Link}>
                <img
                  alt="..."
                  src={
                    require("../../assets/img/theme/logo.png").default
                  }
                />
              </NavbarBrand>
              : null
            }
          </Col>
          <Col md="4" xl="4">
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link-icon" to="/web/index" tag={Link}>
                    <img
                      alt="Logo"
                      src={require("assets/img/theme/icon-home.png").default}
                    />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/web/info"
                    tag={Link}
                  >
                    <img
                      alt="Logo"
                      src={require("assets/img/theme/icon-info.png").default}
                    />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link-icon" to="/web/contact" tag={Link}>
                    <img
                      alt="Logo"
                      src={require("assets/img/theme/icon-message.png").default}
                    />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/web/world"
                    tag={Link}
                  >
                    <img
                      alt="Logo"
                      src={require("assets/img/theme/icon-browser.png").default}
                    />
                  </NavLink>
                </NavItem>
              </Nav>
          </Col>
        </Row>
      </header>
      {/* <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={
                require("../../assets/img/brand/argon-react-white.png").default
              }
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link-icon" to="/web/index" tag={Link}>
                  <i className="ni ni-planet" />
                  <span className="nav-link-inner--text">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/web/register"
                  tag={Link}
                >
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">Register</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/web/login" tag={Link}>
                  <i className="ni ni-key-25" />
                  <span className="nav-link-inner--text">Login</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/admin/user-profile"
                  tag={Link}
                >
                  <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">Profile</span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
            </Navbar> */}
    </>
  );
};

export default AuthNavbar;
