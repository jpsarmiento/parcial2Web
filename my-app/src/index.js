import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

function obtenerIdioma(){     
  return (navigator.language || navigator.userLanguage); 
} 

function idioma(){     
  if(obtenerIdioma().substring(0,2) ==="es"){
      return localeEsMessages;
  }     
  else {
      return localeEnMessages;
  }  
}  

ReactDOM.render(
<IntlProvider locale={obtenerIdioma().substring(0,2)} messages={idioma()}>     
<App />   
</IntlProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
