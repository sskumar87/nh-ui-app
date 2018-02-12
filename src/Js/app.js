import Layout from "./components/Layout";
import AppHeader from "./components/AppHeader";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import RawCurtains from "./components/RawCurtains";
import Curtains from "./components/Curtains";

export default class App extends Component {
    render() {
      return (
        <BrowserRouter>
            <div>
                <Route path='/' exact component={AppHeader} />
            </div>
        </BrowserRouter>
      )
    }
}

