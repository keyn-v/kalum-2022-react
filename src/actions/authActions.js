import axios from 'axios';
import qs from 'querystring-es3';
import setAuthToken from '../helpers/setAuthToken';
import { LOGIN_ENDPOINT } from '../helpers/endpoints';
import { SET_CURRENT_USER } from './types';

export const loginUser = (userData) => dispatch => {
    
    return new Promise((resolve,reject) => {
        const tokenApp = Buffer.from('kalum-app:12345','utf8').toString('base64');
        const config = {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${tokenApp}`
            }
        }    
        userData = {username: userData.email, password: userData.password, grant_type: 'password'}
        axios.post(LOGIN_ENDPOINT,qs.stringify(userData),config).then(response => {
            const {access_token} = response.data;
            localStorage.setItem('token',access_token);
            setAuthToken(access_token);
            const payload = JSON.parse(atob(access_token.split('.')[1]));
            dispatch(setCurrentUser({user: payload, loggedIn: true}));
            resolve(response);
            console.log(response);
        }).catch(error => {
            reject(error);
        });

    });

} 

export const setCurrentUser = ({user,loggedIn}) => {
    return {
        type: SET_CURRENT_USER,
        payload: {user, loggedIn}

    }
}

export const logoutUser = () => dispatch => {
    //mayuscula a minuscula
    localStorage.removeItem('token');
    setAuthToken(false);
    dispatch(setCurrentUser({user:{}, loggedIn: false}));
}