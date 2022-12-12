import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getCarreraTecnicas } from '../../actions/carreraTecnicaActions';
import { CarreraTecnica } from '../carreras-tecnicas/CarreraTecnica';

export default function CarrerasTecnicas() {
  const [fetching,setFetching] = useState(true);
  const [fila,setFila] = useState(0);
  const carrerasTecnicas = useSelector(state => state.carrerasTecnicas.carrerasTecnicas);
  const fetched = useSelector(state => state.carrerasTecnicas.fetched);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fechedCarrerasTecnicas() {
      if(!fetched) {
        try{
          setFetching(true);
          await dispatch(getCarreraTecnicas());
          setFetching(false);
        }catch(error){
          console.log(error);
        }
      }
    }
    fechedCarrerasTecnicas();
    console.log(carrerasTecnicas);
  },[dispatch,fetched]);


  return (
    <div>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Carrera Tecnica</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            carrerasTecnicas && carrerasTecnicas.map((carreraTecnica,index) => <CarreraTecnica key={carreraTecnica.carreraId}
             carreraTecnicaData = {carreraTecnica} registro={index}></CarreraTecnica>)
          }
        </tbody>
      </Table>
    </div>
  )
}
