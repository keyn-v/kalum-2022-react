import React, { useState } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap';


export const SignUpForm = ({errores, onSubmitCallback}) => {
    const [apellidos, setApellidos] = useState('');
    const [nombres, setNombres] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({apellidos, nombres, email, password, username});
    }

  return (
    <Form onSubmit={submitForm}>
        <Row>
            <Col md="6" xs="12">
                <Form.Group control="nombres">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" value={nombres} onChange={e => setNombres(e.target.value)} placeholder="Nombres" isInvalid={errores.nombres}/>
                    <Form.Control.Feedback type="invalid">
                        {errores.nombres}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md="6" xs="12">
                <Form.Group control="apellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" value={apellidos} onChange={e => setApellidos(e.target.value)} placeholder="Apellidos" isInvalid={errores.apellidos}/>
                    <Form.Control.Feedback type="invalid">
                        {errores.apellidos}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md="6" xs="12">
                <Form.Group control="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={ e => setEmail(e.target.value)} placeholder="Email" isInvalid={errores.email}/>
                    <Form.Control.Feedback type="invalid">
                        {errores.email}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md="6" xs="12">
                <Form.Group control="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={ e => setPassword(e.target.value)} placeholder="Password" isInvalid={errores.password}/>
                    <Form.Control.Feedback type="invalid">
                        {errores.password}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md="6" xs="12">
                <Form.Group control="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" isInvalid={errores.username}/>
                    <Form.Control.Feedback type="invalid">
                        {errores.username}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Button variant="primary" type="submit" className='mt3'>Crear Cuenta</Button>
    </Form>
  )
}
