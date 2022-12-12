import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export default function SigninForm({ errores, onSubmitCallback }) {
    const[username,setUsername] = useState("kduarte@gmail.com");
    const[password, setPassword] = useState("12345");

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({username,password});
    }

    return (
        <Form onSubmit={submitForm}>
            <Form.Group control='username' className='mt-3'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" isInvalid={errores.username}/>
                <Form.Control.Feedback type="invalid">{errores.username}</Form.Control.Feedback>
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
