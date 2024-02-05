import React from 'react';
import ReactDOM from 'react-dom/client';

//slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);


reportWebVitals();
