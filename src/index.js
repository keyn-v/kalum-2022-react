import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './store';
import { Provider } from "react-redux";
import React from "react";
import checkForToken from './helpers/checkForToken';
window.Buffer = require('buffer/').Buffer;

checkForToken();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>

);

//ReactDOM.render(<App />, document.getElementById('root'));