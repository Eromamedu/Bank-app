import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BankProvider } from "./components/Fintech-app/Bankcontext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BankProvider>
    <App />
    </BankProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

