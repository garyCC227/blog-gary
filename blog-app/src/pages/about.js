import React from "react";


import styles from './about.module.css';
const About = () => {
  //TODO: late host the databse in CLOUB with API?
  return (
    <div>
      <div class={`ui grid ${styles['my-section']}`}>
        <div class={`row ${styles['my-row']}`}>
          <div class=' center aligned four wide column'>
            <h3 style={{textDecoration:'underline'}}>Education</h3>
          </div>
          <div class=' eleven wide column'>
            <h2>Helo</h2>
          University?
            Masters in Beer tasting •April 2007

            Describe your experience at school, what you learned, what useful skills you have acquired etc.

            School #1 Maybe College?
            What did you study 101 •March 2003

            Describe your experience at school, what you learned, what useful skills you have acquired etc.
          </div>
        </div>
      </div>

      <div class={`ui grid ${styles['my-section']}`}>
        <div class={`row ${styles['my-row']}`}>
          <div class=' center aligned four wide column'>
            <h3 style={{textDecoration:'underline'}}>Skills</h3>
          </div>
          <div class=' eleven wide column'>
            <h2>Helo</h2>
          University?
            Masters in Beer tasting •April 2007

            Describe your experience at school, what you learned, what useful skills you have acquired etc.

            School #1 Maybe College?
            What did you study 101 •March 2003

            Describe your experience at school, what you learned, what useful skills you have acquired etc.
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default About;
