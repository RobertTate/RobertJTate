import React, { Fragment } from 'react';

const Projects = (props) => {

    return (
        <Fragment>
            <div className="projects">
                <div className="center-project">
                    <div className="row2">
                        <h1 className="oswald-white title">PROJECTS</h1>
                    </div>
                    <a href="https://github.com/RobertTate" target="_blank"><div className="github-row" style={{ color: "white" }}>
                        <span className="text-white raleway">Check Out  </span><i className="fab fa-github fa-4x"></i><span className="text-white raleway">  My Repo's</span>
                    </div></a>
                    <br />
                    <div className="row2 project-row">
                        <div className="project-text-box">
                            <a href='https://guarded-garden-27785.herokuapp.com/' target="_blank"><h1 className="oswald-white">Blog Page</h1></a>
                            <p className="project-text">Built with <strong>React</strong>, I built a blog site that would let users write and modify blog posts. Blog content is held in <strong>MySQL</strong>, and retrieved with API requests. I used <strong>Passport.js</strong> to create secure logins, protecting certain API routes until a user is logged in. Passwords are hashed and salted using <strong>Bcrypt</strong>. I also implemented <strong>MailGun</strong> for email submission and <strong>Stripe</strong> for payment processing (a test setup to take "donations"). And finally, a little <strong>Bootstrap</strong>.</p>
                            <p className="mobile-text">A personal blog site built with React, Node.js, Express, MySQL, Passport.js, Mailgun, Stripe, and Bootstrap.</p>
                        </div>
                        <div className="project-text-box">
                            <a href='https://github.com/RobertTate/JellyDropServerSide' target="_blank"><h1 className="oswald-white">Jelly Drop</h1></a>
                            <p className="project-text">Built with <strong>React Native</strong>, I worked with a team of two others to develop a mobile game called Jelly Drop. This project uses a number of libraries specific to mobile development, including (but not limited to)<strong> Native-Base, React-Native-Maps, and React-Navigation.</strong> The project runs <strong>Node.js</strong> on the backend, and utilizes <strong>MySQL</strong> to relate jellies to players, and players to specific game instances.</p>
                            <p className="mobile-text">A mobile app built using React Native, alongside a fully fleshed out back end (Node.js).</p>
                        </div>
                        <div className="project-text-box">
                            <a href='https://roberttate.github.io/' target="_blank"><h1 className="oswald-white">Type Writer</h1></a>
                            <p className="project-text">Using a whole lot of <strong>jQuery</strong>, I built an interactive typerwriter game. Keys highlight when pressed down based on the recognition of their ASCII charachter, the next letter in each word you need to type appears after the last succesful entry, and a words per minute score is calculated at the end (also taking into account any mistyped letters)</p>
                            <p className="mobile-text">A typewriter game built using jQuery, using Bootstrap for design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
};


export default Projects;
