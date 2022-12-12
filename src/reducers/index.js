import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { carrerasTecnicasReducer } from './carrerasTecnicasReducer';

export default combineReducers({
    auth: authReducer,
    carrerasTecnicas: carrerasTecnicasReducer

});