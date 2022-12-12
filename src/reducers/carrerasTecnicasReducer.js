import { SET_CARRERAS_TECNICAS } from '../actions/types';
const inititialState = {carrerasTecnicas: [], fetched: false};

export const carrerasTecnicasReducer = (state = inititialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_CARRERAS_TECNICAS:
        return {
            ... state,
            fetched: payload.fetched,
            carrerasTecnicas: payload.carrerasTecnicas
        }
        default:
            return state;
    }
}