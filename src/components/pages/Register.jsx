import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { isObjEmpty } from '../../helpers/Helpers';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { SignUpForm } from '../forms/SignUpForm';
import { Link } from 'react-router-dom';
import { registerUser, loginUser } from '../../actions/authActions';
import Swal from 'sweetalert2';

export default function Register() {
  const [errores, setErrores] = useState({});
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
  });

  const register = ({ nombres, apellidos, email, password, username }) => {
    const errores = {};
    setErrores(errores);

    if (validator.isEmpty(apellidos)) {
      errores.apellidos = 'El campo apellidos es obligatorio';
    }

    if (validator.isEmpty(nombres)) {
      errores.nombres = 'El campo nombres es obligatorio';
    }

    if (validator.isEmpty(email)) {
      errores.email = 'El campo email es obligatorio';
    }

    if (validator.isEmpty(password)) {
      errores.password = 'El campo password es obligatorio';
    }

    if (validator.isEmpty(username)) {
      errores.username = 'El campo username es obligatorio';
    }

    if (!isObjEmpty(errores)) {
      setErrores(errores);
      return;
    }

    // llamada a la accion para almacenar el registro
    //navigate('/');
    dispatch(registerUser({ nombres, apellidos, email, password, username }))
      .then(response => {
          Swal.fire({
            icon:'success',
            title: 'Crear cuenta',
            text: `Bienvenido al sistema`,
            footer: '<a href="#">Kalum v1.0.0</a>'
          }).then(result => {
            if(result.isConfirmed){
              dispatch(loginUser({ username, password }));
            }
          });

      }).catch(error => {
        setErrores({ registerError: error.response.data.message });
      });


  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card body>
            <h3>Crear cuenta</h3>
            <hr />
            <SignUpForm errores={errores} onSubmitCallback={register}></SignUpForm>
            <div className='mt-3'>
              <Link to={"/login"}>Ya tienes una cuenta?</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
