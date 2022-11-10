import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SigninForm from '../forms/SigninForm'
import validator from 'validator';
import { isObjEmpty } from '../../helpers/Helpers';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';

export default function Login() {
    const [errores, setErrores] = useState({});
    const dispath = useDispatch();
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn) {
            navigate('/');
        }
    });


    const login = ({ email, password }) => {
        const errores = {};
        setErrores(errores);

        if (!validator.isEmail(email)) {
            errores.email = 'El correo electronico es invalido';
        }

        if (validator.isEmpty(password)) {
            errores.password = 'La contrasenia no puede estar vacia'
        }

        if (!isObjEmpty(errores)) {
            setErrores(errores);
            return;
        }

        // Llamada a la api de autentiacion

        dispath(loginUser({email, password})).then(response => {
            /*Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Inicio de sesion exitoso',
                showconfirmButton: false,
                timer: 1500
            })*/
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <Container className='mt-5'>
            <Row>
                <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <Card body>
                        <h3>Iniciar sesion</h3>
                        <hr></hr>
                        <SigninForm errores={errores} onSubmitCallback={login}></SigninForm>
                        <div className='mt3'>
                            <Link to={"/register"}>Ya tienes una cuenta?, crea una aqui</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
