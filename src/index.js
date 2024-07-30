import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const { createRoot } = ReactDOM;
const element = <Navbar />;
const root = createRoot(document.getElementById('root'));
root.render(element);




