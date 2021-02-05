import React from  "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";


function App() {
    
    return (
        <>
        <Router>
            <Header/>
                <Switch>
                    <Route path='/portfolio'>
                        <Portfolio />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            <Footer />
        </Router>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById(`app`)
);
