import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
// basename="Masref_App"
ReactDOM.render(
	<BrowserRouter basename="Masref_App">
		<App />
	</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
