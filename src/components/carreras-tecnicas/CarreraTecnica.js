import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { CARRERAS_TECNICAS_ENDPOINT } from '../../helpers/endpoints';
import { useDispatch } from 'react-redux';
import { getCarreraTecnicas } from '../../actions/carreraTecnicaActions';
import { logoutUser } from '../../actions/authActions';

export const CarreraTecnica = ({ carreraTecnicaData, registro }) => {
    const [show, setShow] = useState(false);
    const [carrera, setCarrera] = useState(carreraTecnicaData.CarreraTecnica);
    const handledClose = () => setShow(false);
    const handledShow = () => setShow(true);
    const dispatch = useDispatch();

    const eliminarCarreraTecnica = async (uuid) => {
        try {
            const respuesta = await Swal.fire({
                title: 'Esta seguro de eliminar el registro?',
                text: `${carreraTecnicaData.carreraTecnica}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, quiero eliminar'
            });
            if (respuesta.isConfirmed) {
                const response = await axios.delete(`${CARRERAS_TECNICAS_ENDPOINT}/${uuid}`);
                await dispatch(getCarreraTecnicas());

            }
        } catch (error) {
            Swal.fire('Eliminar registro',`Error: ${error.response.data}`, 'error');
        }
    }

    const updateCarreraTecnica = async () => {
        try {
            carreraTecnicaData.carreraTecnica = carrera;
            console.log(carreraTecnicaData);
            const response = await axios.put(`${CARRERAS_TECNICAS_ENDPOINT}/${carreraTecnicaData.carreraId}`, carreraTecnicaData);
            dispatch(getCarreraTecnicas());
            Swal.fire({
                title: 'Editar carreras tecnicas',
                text: `${response.data.Mensaje}`,
                icon: 'success'
            }).then(respuesta => {
                if (respuesta.isConfirmed) {
                    setShow(false);
                }
            });

        } catch (error) {
            if (error.status === 401) {
                Swal.fire('Edita carrera tecnica', `Error: ${error.message}`, 'error');
                setShow(false);
                dispatch(logoutUser());
            } else {
                Swal.fire('Edita carrera tecnica', `Error: ${error.message}`, 'error');
                setShow(false);

            }

        }
    }

    return (
        <>
            <tr>
                <td>{registro + 1}</td>
                <td>{carreraTecnicaData.carreraTecnica}</td>
                <td><Button variant="primary" size="sm" className="mr-4" onClick={handledShow}>Editar</Button></td>
                <td><Button variant="danger" size="sm" className="mr-4" onClick={() => eliminarCarreraTecnica(carreraTecnicaData.carreraId)}>Eliminar</Button></td>
            </tr>
            <Modal show={show} onHide={handledClose}>
                <Modal.Header>
                    <Modal.Title>Editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group control="carreraTecnica">
                            <Form.Label>Carrera Tecnica</Form.Label>
                            <Form.Control type="text" onChange={e => setCarrera(e.target.value)} className="bg bg-light" plaintext readonly defaultValue={carreraTecnicaData.carreraTecnica} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handledClose}>Cerrar</Button>
                    <Button variant="primary" onClick={updateCarreraTecnica}>Guardar</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
