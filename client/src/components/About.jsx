import React, { Component, Fragment } from 'react';


class About extends Component {


    render() {
        return (
            <Fragment>
                <div className="about slide">
                    <img src="src/assets/bobbycabin.jpg" className="bobby-cabin" />
                    <div className="top-left">
                        <h1 className="oswald-blue title" >I CODE</h1>
                    </div>
                    <h4 className="text-black top-left2 lato">(sometimes outside)</h4>
                    <p className="about-blurb center-left">I am a developer who is seeking to make life better with code. I have always been driven by creativity in one form or another, and as a developer, I get to take that drive further in ways both subtle and obvious.</p>


                </div>

            </Fragment >
        )
    };

}

export default About;
