import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Downarrow from '../assets/angledoubledown.svg';
import bobbyguitarla from '../assets/bobbyguitarla.jpg';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Links from './Links';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';




class App extends Component {

    render() {

        let options = {
            sectionClassName: 'section',
            anchors: ['Home', 'About', 'Languages'],
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
                            <div style={{ color: "white" }}>
                                <i className="fas fa-angle-double-down fa-4x fade-in3"></i>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <About />
                    </Section>
                    <Section>
                        <Projects />
                    </Section>
                </SectionsContainer>
            </div>




            // <Router>
            //     <Fragment>
            //         <SectionsContainer>
            //             <Section>
            //                 <div id="slide1" className="hero-div slide">
            //                     <div>
            //                         <h1 className="fade-in1 oswald-white title">ROBERT TATE</h1>

            //                         <h2 className="fade-in2">FULL STACK <br />DEVELOPMENT</h2>
            //                     </div>
            //                     <br />
            //                     <div style={{ color: "white" }}>
            //                         <i className="fas fa-angle-double-down fa-4x fade-in3"></i>
            //                     </div>
            //                 </div>
            //             </Section>
            //             <Section>
            //                 <div className="about slide">
            //                     <img src="src/assets/bobbycabin.jpg" className="bobby-cabin" />
            //                     <div className="top-left">
            //                         <h1 id="about-tab" className="oswald-blue title" >I CODE</h1>
            //                     </div>
            //                     <h4 className="text-black top-left2 lato">(sometimes outside)</h4>
            //                     <p className="about-blurb center-left">I am a professional developer who wants to help improve people's lives with code. Driven by the power of "attaboy's", when I work on a project,<strong> I do it with the intent to impress.</strong></p>
            //                 </div>
            //             </Section>




            //             {/* <Projects /> */}

            






            //         </SectionsContainer>
            //         <Switch>
            //             {/* <Route exact path="/about" component={About} /> */}
            //             <Route exact path="/projects" component={Projects} />
            //             <Route exact path="/resume" component={Resume} />
            //             <Route exact path="/links" component={Links} />
            //         </Switch>
            //     </Fragment>
            // </Router>

        );
    }
}



export default App;
