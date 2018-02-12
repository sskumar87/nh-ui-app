import css from "../css/main.scss";
import App from "./app"
import React from "react"
import ReactDOM from "react-dom"
import "semantic-ui-css/semantic.min.css"
import AppHeader from './js/AppHeader'

var appbody = document.getElementById("appbody");
var appfooter = document.getElementById("appfooter");
ReactDOM.render(<App />, appbody);
ReactDOM.render(<App />, appfooter);
