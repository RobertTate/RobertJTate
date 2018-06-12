import React, { Component, Fragment } from 'react';
import Resume from '../assets/roberttateresume.pdf';


const Languages = (props) => {

    return (
        <Fragment>
            <div className="languages">
                <div className="center-languages">
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
                                <h1 className="oswald-blue text-align-start smallscreenfont">LANGUAGES</h1>
                                <li className="text-align-start text-white margin-left "><p className="smallscreenfont">HTML</p></li>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">CSS</p></li>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">JavaScript (ES5 / ES6)</p></li>
                            </ul>
                            <ul>
                                <h3 className="oswald-blue text-align-start smallscreenfont">DATABASES</h3>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">SQL / MySQL</p></li>
                            </ul>
                            <ul>
                                <h3 className="oswald-blue text-align-start smallscreenfont">DEPLOYMENT</h3>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">Heroku</p></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h1 className="oswald-blue text-align-start smallscreenfont">LIBRARIES</h1>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">ReactJS</p></li>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">React Native</p></li>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">Node.js and Express</p></li>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">jQuery</p></li>
                                <li className="text-align-start text-white margin-left"><p className="smallscreenfont">Bootstrap and Materialize</p></li>
                                <a href={Resume} target='_blank'><h3 className="oswald-resume text-align-start">VIEW RESUME </h3></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
};


export default Languages;
