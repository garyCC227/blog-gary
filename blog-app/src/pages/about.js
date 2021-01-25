import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import AboutMe from "../components/AboutMe";

import styles from "./about.module.css";
const About = () => {
  //TODO: late host the databse in CLOUB with API?
  return (
    <div className={styles.content}>
      <AboutMe />

      {EducationUI()}

      {SkillsetUI()}

      {GetInTouchUI()}
    </div>
  );
};

export default About;

const EducationUI = () => {
  return (
    <div class={`ui grid ${styles["my-section"]}`}>
      <div class={`row ${styles["my-row"]}`}>
        <div class=' center aligned four wide column'>
          <h3 style={{ textDecoration: "underline" }}>Education</h3>
        </div>
        <div class=' eleven wide column'>
          <h3 className='ui header'>
            University of New South Wales
            <h4 className={`sub header ${styles["sub-header"]}`}>
              Bachelor of Engineering, Software(honours) • 2017 - 2020
            </h4>
          </h3>
          <p className={styles.desc}>
            Honours thesis in partial domain adaptation and image classification
            research, HD grade. Act as full stack developer in many software
            projects, including web front-end with React and Flask, API design +
            development with Python and Java. C and C++ for algorithm and data
            structure.
          </p>
        </div>
      </div>
    </div>
  );
};

const SkillsetUI = () => {
  return (
    <div class={`ui grid ${styles["my-section"]}`}>
      <div class={`row ${styles["my-row"]}`}>
        <div class=' center aligned four wide column'>
          <h3 style={{ textDecoration: "underline" }}>Skillset</h3>
        </div>
        <div class=' eleven wide column'>
          <section className=''>
            <h4 className='ui header'>
              Programming Language
              <div className={`sub header ${styles["sub-header"]}`}>
                Python, Java, C, C++, Haskell, Dafny, SQL, Perl
              </div>
              <br />
            </h4>
          </section>

          <section className=''>
            <h4 className='ui header'>
              Web development
              <div className={`sub header ${styles["sub-header"]}`}>
                ReactJs, Redux, React-native, Node.js, Javascript, Flask, HTML,
                CSS, Boostrap
              </div>
              <br />
            </h4>
          </section>

          <section className=''>
            <h4 className='ui header'>
              Other Skills
              <div className={`sub header ${styles["sub-header"]}`}>
                Git, Latex, Image classification, Object segmentation, MATLAB
              </div>
              <br />
            </h4>
          </section>
        </div>
      </div>
    </div>
  );
};

const GetInTouchUI = () => {
  return (
    <div class={`ui grid ${styles["my-section"]}`}>
      <div class={`row ${styles["my-row"]}`}>
        <div class=' center aligned four wide column'>
          <h3 style={{ textDecoration: "underline" }}>Get In Touch</h3>
        </div>
        <div class=' eleven wide column'>
          <section className=''>
            <h4 className='ui header'>
              Email or Linkedin
              <div className={`sub header ${styles["sub-header"]}`}>
                <a href='#'>clc871617906@gmail.com </a>
                Or
                <a
                  href='https://linkedin.com/in/linchen-gary-chen-a119a4190'
                  target='_blank'
                >
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='span'
                  >
                    <FaLinkedin />
                  </IconButton>
                </a>
              </div>
              <br />
            </h4>
          </section>

          <section className=''>
            <h4 className='ui header'>
              Available Time
              <div className={`sub header ${styles["sub-header"]}`}>24+1/7</div>
              <br />
            </h4>
          </section>

          <section className=''>
            <h4 className='ui header'>
              Side Projects
              <div className={`sub header ${styles["sub-header"]}`}>
                <a
                  href='https://blog-gary-dd8d0.web.app/blog-gary'
                  target='_blank'
                >
                  Personal Blog
                </a>
                <br />
                Github:
                <a href='https://github.com/garyCC227' target='_blank'>
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='span'
                  >
                    <FaGithub />
                  </IconButton>
                </a>
              </div>
              <br />
            </h4>
          </section>
        </div>
      </div>
    </div>
  );
};
