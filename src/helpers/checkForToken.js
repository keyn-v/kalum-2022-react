import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from '../actions/authActions';
import store from '../store';

const checkForToken = () => {
    if(localStorage.getItem('token')){
        setAuthToken(localStorage.getItem('token'));
        const payload = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
        store.dispatch(setCurrentUser({user:payload, loggedIn:true}));
        const currentTime = Math.floor(Date.now() / 1000);
        if(payload.exp < currentTime){
            store.dispatch(logoutUser());
            window.location.href = './login';
        }
    }

}

export default checkForToken;