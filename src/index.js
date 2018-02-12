import App from "./Js/app"
import React from "react"
import ReactDOM from "react-dom"
import "semantic-ui-css/semantic.min.css"
import registerServiceWorker from './registerServiceWorker';
import AppHeader from './Js/components/AppHeader'

ReactDOM.render(<App />, document.getElementById('appbody'));
registerServiceWorker();
