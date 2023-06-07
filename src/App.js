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
          
          <a href="https://github.com/Peter-S-G" target="_blank" className="entrepreneur">Github Profile</a>
          <a href={Resume} className="entrepreneur" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/peter-geras/" target="_blank" className="entrepreneur">Linkedin</a>
          <div className="dropdown">
            <a className="entrepreneur">Projects</a>
            <div className="dropdown-content">
              <a href="https://github.com/Peter-S-G/Payroll" target="_blank"   className="entrepreneur">Payroll</a>
              <a href="https://github.com/Peter-S-G/DigitalLease" target="_blank"  className="entrepreneur">DigitalLease</a>
            </div>
          </div>
          
        </p>
     <div className="fullbody">
        <h1>Peter Geras</h1>
        <h2>Software Engineer </h2>
  
        <div className="demetri">
          <img src={profilePic} alt="profile image" />
          <div className="aboutMe">
          Motivated software engineer, with expertise in various areas of computer science such as data science, software development, and artificial intelligence. 
          Posses a solid foundation in programming languages and problem-solving skills to contribute to the tech industry and take on challenging projects.
          </div>
       
        </div>
       
        </div>
        </div>
      </body>
    </html>
  );
}

export default App;
