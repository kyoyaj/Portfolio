import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, applyMiddleware, createStore} from "redux";
import './index.css';
import App from './App';

//const store = createStore( bookState );
ReactDOM.render( <App />, document.getElementById('app'));

