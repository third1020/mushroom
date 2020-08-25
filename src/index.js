import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";

import registerServiceWorker from './registerServiceWorker';
window.$URLbackend = "https://backtest.be";
// window.$URLbackend = "http://localhost:3000";
window.$URLfontend = "http://localhost:3000";


ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();
