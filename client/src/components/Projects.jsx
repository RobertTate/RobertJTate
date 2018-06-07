import React, { Component, Fragment } from 'react';

const Projects = (props) => {

    return (
        <Fragment>
            <div className="projects slide">
                <div id="project-tab">
                    <div className="row">
                        <h1 className="oswald-white title">PROJECTS</h1>
                    </div>
                    <a href="https://github.com/RobertTate" target="_blank"><div className="github-row" style={{ color: "white" }}>
                        <span className="text-white raleway">Check Out </span><i className="fab fa-github fa-4x"></i><span className="text-white raleway"> My Repo's</span>
                    </div></a>
                    <br />
                    <div className="row project-row">
                        <div className="project-text-box">
                            <a href='https://guarded-garden-27785.herokuapp.com/' target="_blank"><h1 className="oswald-white">Blog Page</h1></a>
                            <p className="project-text">Built with <strong>React</strong> (much like this website), I created a personal blog site that would let users write and modify blog posts. All blog content is held in a <strong>MySQL</strong> database, and retrieved with API requests sent to the server, all deployed using <strong>Heroku</strong>. I used <strong>Passport.js</strong> to create secure logins, protecting certain API routes until a user is logged in. Passwords were hashed and salted using <strong>Bcrypt</strong>. I also implemented <strong>MailGun</strong> for email submission and <strong>Stripe</strong> for payment processing (a test setup to take "donations"). And of course, a little <strong>Bootstrap</strong> to finish it off.</p>
                        </div>
                        <div className="project-text-box">
                            <a target="_blank"><h1 className="oswald-white">Jelly Drop</h1></a>
                            <p className="project-text"><i>(Link to more info coming soon....)</i> Built with <strong>React Native</strong>, I worked with a team of two others to develop a mobile app called Jelly Drop. The premise is that you can drop "jellies" on a map, and other people can pick them up. You get points for picking up other peoples jellies, and it also gives you more jellies to drop when you run out of your own. This project uses a number of libraries specific to mobile development, including (but not limited to)<strong> Native-Base, React-Native-Maps, and React-Navigation.</strong> The project runs <strong>Node.js</strong> on the backend, and utilizes <strong>MySQL</strong> to relate jellies to players, and players to specific game instances.</p>
                        </div>
                        <div className="project-text-box">
                            <a href='https://roberttate.github.io/' target="_blank"><h1 className="oswald-white">Just My Type</h1></a>
                            <p className="project-text">Using a whole lot of <strong>jQuery</strong>, I built an interactive typerwriter game. Keys highlight when pressed down based on the recognition of their ASCII charachter, the next letter in each word you need to type appears after the last succesful entry, and a words per minute score is calculated at the end (also taking into account any mistyped letters)</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
};


export default Projects;
