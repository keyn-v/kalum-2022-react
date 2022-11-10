import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import {isObjEmpty} from '../../helpers/Helpers';
import {Container, Row, Col, Card, Alert} from 'react-bootstrap';
import { SignUpForm } from '../forms/SignUpForm';
import { Link } from 'react-router-dom';

export default function Register() {
  const [errores, setErrores] = useState({});
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const distpatch = useDispatch();
  const navigate = useNavigate();

  useEffect (() => {
    if(loggedIn){
    navigate.push('/');
    }
  });

  const register = ({nombres, apellidos, email, password, username}) => {
    const errores = {};
    setErrores(errores);

    if(validator.isEmpty(apellidos)){
      errores.apellidos = 'El campo apellidos es obligatorio';
    }

    if(validator.isEmpty(nombres)){
      errores.nombres = 'El campo nombres es obligatorio';
    }

    if(!validator.isEmpty(email)){
      errores.email = 'El campo email es obligatorio';
    }

    if(validator.isEmpty(password)){
      errores.password = 'El campo password es obligatorio';
    }

    if(validator.isEmpty(username)){
      errores.username = 'El campo username es obligatorio';
    }

    if(!isObjEmpty(errores)){
      setErrores(errores);
      return;
    }

    // llamada a la accion para almacenar el registro


  }

  return (
    <Container classname="mt-5">
      <Row>
        <Col sm="12" md={{span:8, offset: 2}} lg={{span:6, offset: 3}}>
          <Card body>
            <h3>Crear cuenta</h3>
            <hr/>
            <SignUpForm errores={errores} onSubmitCallback={register}></SignUpForm>
            <div className='mt3'>
              <Link to={"/login"}>Ya tienes una cuenta?</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
