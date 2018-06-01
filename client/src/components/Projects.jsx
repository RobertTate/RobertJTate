import React, { Component, Fragment } from 'react';



const Projects = (props) => {

    return (
        <Fragment>
            <div className="projects slide">
                <div id="about-tab">

                    <div className="row">
                        <h1 className="oswald-white title">I've Used</h1>
                    </div>
                    <br />
                    <div className="icon-row text-blue">
                        <i className="fab fa-html5 fa-3x"></i>
                        <i className="fab fa-js-square fa-3x"></i>
                        <i className="fab fa-node-js fa-3x"></i>
                        <i className="fas fa-database fa-3x"></i>
                    </div>
                    <br />
                    <div className="icon-row2 text-blue">
                        <i className="fab fa-css3-alt fa-3x"></i>
                        <i className="fab fa-react fa-3x"></i>
                        <i className="fas fa-cloud fa-3x"></i>
                    </div>

                    <div className="row">
                        <div>
                            <ul>
                                <h1 className="oswald-blue text-align-start">LANGUAGES</h1>
                                <li className="text-align-start text-white margin-left"><p>HTML</p></li>
                                <li className="text-align-start text-white margin-left"><p>CSS</p></li>
                                <li className="text-align-start text-white margin-left"><p>JavaScript (ES5 / ES6)</p></li>
                            </ul>
                            <ul>
                                <h3 className="oswald-blue text-align-start">DATABASES</h3>
                                <li className="text-align-start text-white margin-left"><p>SQL / MySQL</p></li>
                            </ul>
                            <ul>
                                <h3 className="oswald-blue text-align-start">DEPLOYMENT</h3>
                                <li className="text-align-start text-white margin-left"><p>Heroku</p></li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <h1 className="oswald-blue text-align-start">LIBRARIES</h1>
                                <li className="text-align-start text-white margin-left"><p>ReactJS</p></li>
                                <li className="text-align-start text-white margin-left"><p>React Native</p></li>
                                <li className="text-align-start text-white margin-left"><p>Node.js and Express</p></li>
                                <li className="text-align-start text-white margin-left"><p>jQuery</p></li>
                                <li className="text-align-start text-white margin-left"><p>Bootstrap and Materialize</p></li>
                                <a><h3 className="oswald-resume text-align-start">FULL RESUME</h3></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
};


export default Projects;
