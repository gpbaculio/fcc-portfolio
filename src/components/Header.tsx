import React, { useState } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <Container>
        <Navbar expand='md'>
          <NavbarBrand href='/'>Glendon Philipp Baculio</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/components/'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/components/'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/components/'>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
