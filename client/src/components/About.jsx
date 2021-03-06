import React, { Component, Fragment } from 'react';


class About extends Component {


    render() {
        return (
            <Fragment>
                <div className="about about-section">
                    <div className="top-left">
                        <h1 className="oswald-blue title fade-in1" >I CODE</h1>
                    </div>
                    <h4 className="text-black top-left2 lato fade-in2">(sometimes outside)</h4>
                    <p className="about-blurb center-left fade-in3">I am a developer living in Nashville, TN, seeking to help people acheive their goals with code. I have always been driven by creativity in one form or another, and as a developer, I get to take that drive further in ways both subtle and obvious.</p>
                </div>

            </Fragment >
        )
    };

}

export default About;
