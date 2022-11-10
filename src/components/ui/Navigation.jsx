import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

export default function Navigation() {

  const user = useSelector(state => state.auth.user);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();

  return (
    <Container>
      <Navbar bg='dark' variant='dark' expand='xl'>
        <Navbar.Brand as={NavLink} to="/">Kalum</Navbar.Brand>
        <Navbar.Collapse id='main-menu'>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/carrerasTecnicas'>Carreras Tecnicas</Nav.Link>
          </Nav>
          {!loggedIn ? (
            <Nav>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="/register">Crear Cuenta</Nav.Link>
            </Nav>

          )
            :
            (
              <Nav>
                <NavDropdown title={`${user.apellidos} ${user.nombre}`} id="main-menu">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => dispatch(logoutUser())}>Cerrar sesion</NavDropdown.Item>
                </NavDropdown>
              </Nav>

            )
          }




        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
