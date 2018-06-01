import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Downarrow from '../assets/angledoubledown.svg';
import bobbyguitarla from '../assets/bobbyguitarla.jpg';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Links from './Links';

import { TweenLite, TimelineLite } from 'gsap';
import scrollTo from '../../../node_modules/gsap/ScrollToPlugin';



class App extends Component {

    // componentDidMount() {

    //     // TweenLite.set('body', { perspective: 700 });
    //     // var slides = document.querySelectorAll('.slide'), tl = new TimelineLite({ paused: true });
    //     // for (var i = 0; i < slides.length; i++) {

    //     //     if (i != slides.length - 1) {
    //     //         tl.to(slides[i], 0.5, { scale: .8, ease: Back.easeOut })
    //     //         .to(slides[i], 0.7, { xPercent: -100, rotationY: 90 }, 'L' + i)
    //     //             // tl.to(window, 0.7, { scrollTo: '#slide1' }, 'L' + i )
    //     //                 .from(slides[i + 1], 0.7, { xPercent: 100, rotationY: -90 }, 'L' + i)
    //     //                 // .from(window, 0.7, { scrollTo: '#slide2' }, 'L' + i )

    //     //             // .to('#Dot' + i, 0.7, { backgroundColor: 'rgba(255,255,255,0.2)' }, 'L' + i)
    //     //             .from(slides[i + 1], 0.5, { scale: .8, ease: Back.easeIn })
    //     //     };
    //     // };
    //     // function GO(e) {
    //     //     var SD = isNaN(e) ? e.wheelDelta || -e.detail : e;
    //     //     if (SD < 0) { tl.play() } else { tl.reverse() };
    //     // };

    //     // document.addEventListener("mousewheel", GO);
    //     // document.addEventListener("DOMMouseScroll", GO);
    //     // document.getElementById('nextBtn').addEventListener("click", function () { GO(-1) });
    //     // document.getElementById('prevtBtn').addEventListener("click", function () { GO(1) });


    // }


    render() {
        return (
            <Router>
                <Fragment>

                    <div id="slide1" className="hero-div slide">
                        <div>
                            <h1 className="fade-in1 oswald-white title">ROBERT TATE</h1>

                            <h2 className="fade-in2">FULL STACK <br />DEVELOPMENT</h2>
                        </div>
                        <br />
                        <div style={{ color: "white" }}>

                            <i id="nextBtn" className="fas fa-angle-double-down fa-4x fade-in3"></i>
                        </div>
                    </div>
                    <About />
                    <Projects />









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
