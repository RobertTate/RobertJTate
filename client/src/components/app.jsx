import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Downarrow from '../assets/angledoubledown.svg';
import bobbyguitarla from '../assets/bobbyguitarla.jpg';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Links from './Links';




class App extends Component {


    render() {
        return (
            <Router>
                <Fragment>
                    <div className="hero-div">
                        <h1 className="fade-in1 oswald-white">ROBERT TATE</h1>

                        <h2 className="fade-in2">FULL STACK <br />DEVELOPMENT</h2>
                    </div>
                    <br />
                    <div style={{ color: "white" }}>
                        <br />
                        <i className="fas fa-angle-double-down fa-4x fade-in3"></i>
                    </div>
                    <About />








                    <Switch>
                        <Route exact path="/about" component={About} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/resume" component={Resume} />
                        <Route exact path="/links" component={Links} />
                    </Switch>
                </Fragment>
            </Router>

        );
    }
}



export default App;
