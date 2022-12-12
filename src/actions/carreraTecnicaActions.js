import { CARRERAS_TECNICAS_ENDPOINT } from '../helpers/endpoints';
import { SET_CARRERAS_TECNICAS } from './types';
import axios from 'axios';


export const getCarreraTecnicas = () => dispatch => {
    return new Promise((resolve, reject) => {
        axios.get(CARRERAS_TECNICAS_ENDPOINT).then(response => {
            dispatch({
                type: SET_CARRERAS_TECNICAS,
                payload: {fetched: true, carrerasTecnicas: response.data}
            });
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });

}
