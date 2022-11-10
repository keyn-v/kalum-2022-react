import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export default function SigninForm({ errores, onSubmitCallback }) {
    const[email,setEmail] = useState("kduarte@gmail.com");
    const[password, setPassword] = useState("12345");

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({email,password});
    }

    return (
        <Form onSubmit={submitForm}>
            <Form.Group control='email' className='mt-3'>
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo electronico" isInvalid={errores.email}/>
                <Form.Control.Feedback type="invalid">{errores.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group control='password' className='mt-3'>
                <Form.Label>Contrasenia</Form.Label>
                <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Contrasenia" isInvalid={errores.password}/>
                <Form.Control.Feedback type="invalid">{errores.password}</Form.Control.Feedback>
            </Form.Group>

            <Button className='mt-3' variant="primary" type="submit">Iniciar Sesion</Button>
        </Form>
  )
}
