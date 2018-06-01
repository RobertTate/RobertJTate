import React, { Component, Fragment } from 'react';




class About extends Component {

    // componentDidMount() {
    //     window.addEventListener("scroll", function (e) {

    //         if (window.pageYOffset >= 20 && window.pageYOffset < 725) {
    //             TweenLite.to(window, 1, { scrollTo: '#about-tab' })
    //         }

    //     })
    // }

    render() {
        return (
            <Fragment>
                <div className="about slide">
                    <img src="src/assets/bobbycabin.jpg" className="bobby-cabin" />
                    <div className="top-left">
                        <h1 className="oswald-blue title" >I CODE</h1>
                    </div>
                    <h4 className="text-black top-left2 lato">(sometimes outside)</h4>
                    <p className="about-blurb center-left">I am a professional developer who wants to help improve people's lives with code. Driven by the power of "attaboy's", when I work on a project,<strong> I do it with the intent to impress.</strong></p>


                </div>

            </Fragment >
        )
    };

}

export default About;
