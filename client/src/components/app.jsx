import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import About from './About';
import Languages from './Languages';
import Projects from './Projects';
import Resume from './Resume';
import Links from './Links';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';




class App extends Component {

    render() {

        let options = {
            sectionClassName: 'section',
            anchors: ['Home', 'About', 'Languages', 'Projects'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            arrowNavigation: true
        };

        return (
            <div>
                <SectionsContainer className="container" {...options}>
                    <Section className="custom-section" verticalAlign="true">
                        <div id="slide1" className="hero-div slide">
                            <div>
                                <h1 className="fade-in1 oswald-white title">ROBERT TATE</h1>

                                <h2 className="fade-in2">FULL STACK <br />DEVELOPMENT</h2>
                            </div>
                            <br />
                            {/* <div style={{ color: "white" }}>
                                <i className="fas fa-angle-double-down fa-4x fade-in3"></i>
                            </div> */}
                        </div>
                    </Section>
                    <Section>
                        <About />
                    </Section>
                    <Section>
                        <Languages />
                    </Section>
                    <Section>
                        <Projects />
                    </Section>
                </SectionsContainer>
            </div>


        );
    }
}



export default App;
