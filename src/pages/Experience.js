import React from 'react';
import './Experience.css';
import { useState } from 'react';
import bofa_logo from './logos/bofa_logo.jpg';
import jnj_logo from './logos/jnj_logo.jpg';


function Experience() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleFlip3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  return (
    <div class="card-container">
      <h1>Experience</h1>

      <div class="box">
        <div className={`card-wrapper ${isFlipped1 ? 'flipped' : ''}`}
          onClick={handleFlip1}>
          <div class="front-face">
            <p class='job-title'>
              Software Engineer - Bank of America
            </p>
            <p class='team-name' >Equity Swaps Technology</p>

            <div class='company-logo'>
              <img class='logo' src={bofa_logo} alt="Bank of America Logo" />
            </div>
            <h6 class='job-year'>July 2024 - Present</h6>
          </div>
          <div class="back-face">
            <ul>
              <li>Enhanced code reliability and system quality by implementing comprehensive unit testing frameworks for previously untested Python scripts across multiple backend systems, improving test coverage and preventing production regressions</li>
              <li>Led weekly release planning and coordination for 2 internal trading systems, maintaining comprehensive deployment documentation and collaborating with QA teams to streamline production deployment processes</li>
              <li>Developed Python automation script to query multiple backend systems and report on missing data fields, supporting enterprise-wide data quality and monitoring initiatives</li>
              <li>Improved system efficiency and maintainability by reorganizing files to align with Quartz platform compliance guidelines, ensuring scalable and maintainable codebase architecture</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="box">
        <div className={`card-wrapper ${isFlipped2 ? 'flipped' : ''}`}
          onClick={handleFlip2}>
          <div class="front-face">
            <p class='job-title'>Software Engineer Intern - Bank of America</p>
            <p class='team-name'>Equity Services Technology</p>

            <div class='company-logo'>
              <img class='logo' src={bofa_logo} alt="Bank of America Logo" />
            </div>
            <h6 class='job-year'>June 2023 - August 2023</h6>
          </div>
          <div class="back-face">
            <ul>
              <li>Led development team of 6 interns through Python training course, successfully delivering Acronym Microservice Web Application project</li>
              <li>Designed and implemented ETF Creation/Redemption automation workflows, optimizing manual processes and enhancing operational efficiency</li>
              <li>Automated ETF basket trade processing to consolidate transactions for market makers, utilizing testing frameworks to ensure reliability</li>
              <li>Enhanced Java-based trading application backend with new features for transaction completion dates and ETF trade processing</li>
              <li>Developed comprehensive test cases and quality control procedures, improving application reliability through systematic testing approaches</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="box">
        <div className={`card-wrapper ${isFlipped3 ? 'flipped' : ''}`}
          onClick={handleFlip3}>
          <div class="front-face">
            <p class='job-title'>Technology Intern - Johnson & Johnson</p>
            <p class='team-name'>Data & Analytics</p>

            <div class='company-logo'>
              <img class='logo' src={jnj_logo} alt="Johnson and Johnson Logo" />
            </div>
            <h6 class='job-year'>May 2022 - August 2022</h6>
          </div>
          <div class="back-face">
            <ul>
              <li>Improved Data Catalog user experience by redesigning content presentation and evaluating training materials</li>
              <li>Automated data distribution processes using Python and SQL, streamlining workflows and reducing manual communication overhead</li>
              <li>Supported data governance initiatives and secure user access management across enterprise data systems</li>
            </ul>
          </div>


        </div>
      </div>

      <div>
        <h2 align='center'>Technical Skills:</h2>
        <div class='skill_box'>Python</div>
        <div class='skill_box'>Java</div>
        <div class='skill_box'>SQL</div>
        <div class='skill_box'>HTML/CSS</div>
        <div class='skill_box'>JavaScript</div>
        <div class='skill_box'>Git/GitHub</div>
        <div class='skill_box'>Agile</div>
        <div class='skill_box'>JIRA</div>
        <div class='skill_box'>Unit Testing</div>
        <div class='skill_box'>Figma</div>
        <div class='skill_box'>Quartz</div>


      </div>

    </div>

  );
}

export default Experience;
