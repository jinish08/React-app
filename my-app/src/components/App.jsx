import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Review from "./Review";
import Plans from "./Plans";
import ContactPage from "./ContactPage";
import Navbar from "./Navbar"
import { Redirect, Route, Switch } from 'react-router';
import Footer from './Footer';

function App(){
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/review" component={Review}/>
                <Route exact path="/plans" component={Plans}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
}

export default App;