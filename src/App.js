import logo from './logo.svg';
import './App.css';
import React from 'react';
import profilePic from './linkedinprofilepic.jpeg';
import Resume from './Peter GerasResume.pdf';

function App() {


  return (
    <html>
      <head>
        <meta name="Description" content="Demetri Geras" />
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,300" rel="stylesheet" type="text/css" />
        <title>Demetri Geras</title>

      </head>

      <body className="fade-in">
      <div id="contents">
        <p className="links">
          
          <a href="https://github.com/demetrigeras" target="_blank" className="entrepreneur">Github Profile</a>
          <a href={Resume} className="entrepreneur" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/peter-geras/" target="_blank" className="entrepreneur">Linkedin</a>
          <div className="dropdown">
            <a className="entrepreneur">Projects</a>
            <div className="dropdown-content">
              <a href="https://demetrigeras.github.io/Hangman/" target="_blank"   className="entrepreneur">Hangman</a>
              <a href="https://demetrigeras.github.io/UI-Project/" target="_blank"  className="entrepreneur">Random Recipes</a>
            </div>
          </div>
          
        </p>
     <div className="fullbody">
        <h1>Peter Geras</h1>
        <h2>Software Engineer </h2>
  
        <div className="demetri">
          <img src={profilePic} alt="profile image" />
          <div className="aboutMe">
            About: I'm a passionate software engineer with a knack for solving complex problems and debugging my peers' errors.
            I thrive in collaborative environments and believe in creating warm and supportive spaces that foster creativity and innovation.
            When I'm not coding, you can find me playing soccer, chess, or exploring new parts of the world.
          </div>
       
        </div>
       
        </div>
        </div>
      </body>
    </html>
  );
}

export default App;
