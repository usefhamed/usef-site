import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import Me from "./myphoto.JPG";
import insta from "./instagram.png";
import github from "./github-mark.png";
import linkedin from "./linkedin.jpg";
import TypeWriter from "typewriter-effect";
import python_logo from "./python-logo.png";
import C_logo from "./C-logo.png";
import C_plus_plus_logo from "./C++_logo.png";
import java_logo from "./java-logo.png";
import html_logo from "./html-logo.png";
import css_logo from "./css-logo.png";
import javascript_logo from "./javascript-logo.png";
import react_logo from "./react-logo.png";
import mysql_logo from "./mysql-logo.png";
import riscv_logo from "./RISCV-logo.png";
import myphoto2 from "./myphoto2.jpg";
import mylogo from "./logo512.png";

// import { motion, useAnimation } from "framer-motion";

function Layout() {
  const [collapse, setCollapse] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const refHome = useRef(null);
  const refIntro = useRef(null);
  const refSkills = useRef(null);
  const refProjects = useRef(null);
  const windowWidth = window.innerWidth;
  const mobileSwitch = 701;

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll);
  });

  const goHome = () => {
    refHome.current?.scrollIntoView({ behavior: "smooth" });
    if (windowWidth < mobileSwitch) {
      setCollapse(!collapse);
    }
  };

  const goIntro = () => {
    refIntro.current?.scrollIntoView({ behavior: "smooth" });
    if (windowWidth < mobileSwitch) {
      setCollapse(!collapse);
    }
  };

  const goSkills = () => {
    refSkills.current?.scrollIntoView({ behavior: "smooth" });
    if (windowWidth < mobileSwitch) {
      setCollapse(!collapse);
    }
  };

  const goProjects = () => {
    refProjects.current?.scrollIntoView({ behavior: "smooth" });
    if (windowWidth < mobileSwitch) {
      setCollapse(!collapse);
    }
  };

  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll);
  });

  return (
    <div id="container">
      <div id="sidebar-related">
        <aside id="sidebar" className={collapse ? "hidden-sidebar" : null}>
          <div id="sidebar-info">
            <div id="myphoto-container">
              <img src={Me} id="myphoto"></img>
            </div>
            <h1 id="myname">Youssef Hamed</h1>
            <div id="contact-info">
              <div className="info">
                <p className="labelb">📍:&nbsp;</p>
                <p className="label"> Calgary, Alberta, Canada</p>
              </div>
              <div className="info">
                <p className="label">&#9993;:&nbsp;</p>
                <a href="mailto:youssef18.9.2003@gmail.com" id="email-link">
                  youssef18.9.2003@gmail.com
                </a>
              </div>
              <div className="info">
                <p className="label">&#9743;:&nbsp;</p>
                <p className="label"> +1 (587)-890-7797</p>
              </div>
              <div id="social-media">
                <a
                  className="logos"
                  href="https://github.com/usefhamed"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="My Github"
                    className="photo-logo"
                    src={github}
                    width={20}
                    height={20}
                  ></img>
                </a>
                <a
                  className="logos"
                  href="https://www.instagram.com/im_youssef432/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="My Instagram"
                    className="photo-logo"
                    src={insta}
                    width={20}
                    height={20}
                  ></img>
                </a>

                <a
                  className="logos"
                  href="https://www.linkedin.com/in/youssef-walid-hamed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="My Linkedin"
                    className="photo-logo"
                    src={linkedin}
                    width={25}
                    height={25}
                  ></img>
                </a>
              </div>
              <div id="sidebar-tabs">
                <button className="sidebar-tab" onClick={goHome}>
                  Home
                </button>
                <button className="sidebar-tab" onClick={goIntro}>
                  Introduction
                </button>
                <button className="sidebar-tab" onClick={goSkills}>
                  Skills
                </button>
                <button className="sidebar-tab" onClick={goProjects}>
                  Projects
                </button>
              </div>
            </div>
          </div>
        </aside>

        <aside id="menu-button-zone">
          <div id="top-button-zone">
            <button
              id="menu-button"
              onClick={() => {
                setCollapse(!collapse);
              }}
            >
              &#9776;
            </button>
            {/* <button id="dark-button">&#9681;</button> */}
          </div>
          <img id="mylogo" src={mylogo}></img>
        </aside>
      </div>

      <div id="main">
        <div id="title-page" ref={refHome}>
          <div id="my-name-main">
            <h1 className="fly-top">Y</h1>
            <h1 className="fly-bottom">o</h1>
            <h1 className="fly-top">u</h1>
            <h1 className="fly-bottom">s</h1>
            <h1 className="fly-top">s</h1>
            <h1 className="fly-bottom">e</h1>
            <h1 className="fly-top">f</h1>
            <h1 className="fly-top">&nbsp;</h1>
            <h1 className="fly-bottom">H</h1>
            <h1 className="fly-top">a</h1>
            <h1 className="fly-bottom">m</h1>
            <h1 className="fly-top">e</h1>
            <h1 className="fly-bottom">d</h1>
          </div>
          <h2 id="what-i-am-doing">
            Software & Mechatronics Engineering Student
          </h2>
          <div id="my-motto">
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)
                  .changeDeleteSpeed(100)
                  .typeString(
                    "Unius pisces salientes nunquam fluxum fluminis perturbant"
                  )
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(
                    "A single jumping fish never disturbs the flow of the river."
                  )
                  .start();
              }}
            />
          </div>
        </div>
        <div id="introduction" ref={refIntro}>
          <div id="my-description">
            <h2 id="my-intro">Hello! I'm Youssef Hamed</h2>
            <p id="my-description-words">
              &emsp;I am a Egyptian-Canadian third-year Software and
              Mechatronics Engineering student at the&nbsp;
              <a
                id="link-to-ucalgary"
                href="https://www.ucalgary.ca/"
                target="_blank"
                rel="noreferrer"
              >
                University of Calgary
              </a>
              . I have had a strong passion for technology and its many uses
              since I was a child. I remember being a 6 years-old and getting my
              first video-game console-- a Wii-- and instantly falling in love
              with the magic that technology can create. I have held to that
              feeling since, and in the ever evolving world around us, I
              frequently get reminded of it. This is the reason I chose to
              pursue a career in an engineering that deals with both software
              and hardware (Mechatronics). I have been consistently programming
              since the start of my first year in engineering, and I plan on
              continuing with a focus on either robot firmware or video-game
              development.
            </p>
          </div>
          <img id="me-doing-something" alt="A photo of me" src={myphoto2}></img>
        </div>
        <div id="Skills" ref={refSkills}>
          <h2 id="skills-intro">My Skills</h2>
          <div className="skill">
            <div className="skill-id">
              <h3 className="skill-name">Python</h3>
              <img src={python_logo} className="skill-logo"></img>
            </div>
            <p className="skill-description">
              The first programming language that I learned, I became accustomed
              to it through my first university programming course, and have
              consistently used it in learning the basics of A.I. and data
              structures.
            </p>
          </div>
          <div className="skill">
            <div className="skill-id">
              <h3 className="skill-name">C/C++</h3>
              <div className="two-logos">
                <img src={C_logo} className="skill-logo"></img>
                <img src={C_plus_plus_logo} className="skill-logo"></img>
              </div>
            </div>
            <p className="skill-description">
              The second programming language that I learned, I used it in order
              to solve many logic problems in my university courses.
            </p>
          </div>
          <div className="skill">
            <div className="skill-id">
              <h3 className="skill-name">Java</h3>
              <img src={java_logo} className="skill-logo"></img>
            </div>
            <p className="skill-description">
              A langauage I learned in order to become more accustomed to
              Object-oriented programming in University.
            </p>
          </div>
          <div className="skill">
            <div className="skill-id">
              <h3 className="skill-name">HTML and CSS</h3>
              <div className="two-logos">
                <img src={html_logo} className="skill-logo"></img>
                <img src={css_logo} className="skill-logo"></img>
              </div>
            </div>
            <p className="skill-description">
              My introduction to web-development, I used these two langauages to
              build multiple websites that offer both style and function,
              including this site.
            </p>
          </div>
          <div className="skill">
            <div className="skill-id">
              <h3 className="skill-name">JavaScript and React</h3>
              <div className="two-logos">
                <img src={javascript_logo} className="skill-logo"></img>
                <img src={react_logo} className="skill-logo"></img>
              </div>
            </div>
            <p className="skill-description">
              My introduction to adding proper utility to websites and making
              webapps. I learned both of these languages in university and have
              been using them consistently as to make websites (including this
              one).
            </p>
          </div>
          <div className="skill">
            <div className="skill-id">
              <h3 className="skill-name">MySQL</h3>
              <img src={mysql_logo} className="skill-logo"></img>
            </div>
            <p className="skill-description">
              I learned the fundamentals of this language and its use in
              building data management systems in a university course.
            </p>
          </div>
        </div>
        <div id="Projects" ref={refProjects}>
          <h2 id="my-projects">Checkout some of my projects!</h2>
          <div id="project-grid">
            <div className="row">
              <a
                className="column"
                href="https://github.com/usefhamed/usef-ENSF-380-coursework"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">ENSF-380 Coursework</h3>
                <p className="project-description">
                  All of my coursework for my introduction to object-oriented
                  programming in Java 11.
                </p>
                <div className="project-tags">
                  <div className="tag">
                    <img src={java_logo} className="language-logo"></img>
                    <p className="language-name">Java</p>
                  </div>
                </div>
              </a>
              <a
                className="column"
                href="https://contacts.ucalgary.ca/info/enel/courses/w23/ENSF338?destination=courses%2Fw23"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">ENSF-338 Coursework</h3>
                <p className="project-description">
                  My coureswork for my introduction to data structures, such as,
                  but not limited to trees, heaps, and hash tables. As well as
                  some searching and sorting algorithms.
                </p>
                <div className="project-tags">
                  <div className="tag">
                    <img src={python_logo} className="language-logo"></img>
                    <p className="language-name">Python</p>
                  </div>
                  <div className="tag">
                    <img src={java_logo} className="language-logo"></img>
                    <p className="language-name">Java</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="row">
              <a
                className="column"
                href="https://contacts.ucalgary.ca/info/enel/courses/w23/ENCM369?destination=courses%2Fw23"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">ENCM-369 Coursework</h3>
                <p className="project-description">
                  Learning the basics behind how computers function, including
                  but not limited to: CPUs, busses and memory, machine code and
                  assembly language. This was all done using the RISC-V computer
                  architecture. This was my personal favourite course of my
                  second year in my software engineering degree.
                </p>
                <div className="project-tags">
                  <div className="tag">
                    <img src={C_logo} className="language-logo"></img>
                    <p className="language-name">C</p>
                  </div>
                  <div className="tag">
                    <img src={riscv_logo} className="language-logo"></img>
                    <p className="language-name">RISC-V assembly language</p>
                  </div>
                </div>
              </a>
              <a
                className="column"
                href="https://contacts.ucalgary.ca/info/enel/courses/w23/ENSF381?destination=courses%2Fw23"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">ENSF-381 Coursework</h3>
                <p className="project-description">
                  My introduction to the world of web development, in this
                  course I delved into HTML, CSS, JavaScript as well as Meta's
                  React platform. I used the skills I learned from this course
                  to start develpoment on this site that summer!
                </p>
                <div className="project-tags">
                  <div className="tag">
                    <img src={html_logo} className="language-logo"></img>
                    <p className="language-name">HTML</p>
                  </div>
                  <div className="tag">
                    <img src={css_logo} className="language-logo"></img>
                    <p className="language-name">CSS</p>
                  </div>
                  <div className="tag">
                    <img src={javascript_logo} className="language-logo"></img>
                    <p className="language-name">JavaScript</p>
                  </div>
                  <div className="tag">
                    <img src={react_logo} className="language-logo"></img>
                    <p className="language-name">React</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="row">
              <a
                className="column"
                href="https://contacts.ucalgary.ca/info/enel/courses/f22/ENSF337?destination=profiles%2F168-42854"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">ENSF-337 Coursework</h3>
                <p className="project-description">
                  Learned the all of the key features of the C and C++
                  programming languages, such as pointers, memory models, memory
                  managment, etc. This course was split evenly between both
                  langauages.
                </p>
                <div className="project-tags">
                  <div className="tag">
                    <img src={C_logo} className="language-logo"></img>
                    <p className="language-name">C</p>
                  </div>
                  <div className="tag">
                    <img src={C_plus_plus_logo} className="language-logo"></img>
                    <p className="language-name">C++</p>
                  </div>
                </div>
              </a>
              <a
                className="column"
                href="https://contacts.ucalgary.ca/info/enel/courses/f22/ENSF300?destination=courses"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">ENSF-300 Coursework</h3>
                <p className="project-description">
                  My introduction to the professional software engineering
                  terminology and required skills, as well as my foundation for
                  database management systems through MySQL.
                </p>
                <div className="project-tags">
                  <div className="tag">
                    <img src={python_logo} className="language-logo"></img>
                    <p className="language-name">Python</p>
                  </div>
                  <div className="tag">
                    <img src={mysql_logo} className="language-logo"></img>
                    <p className="language-name">MySQL</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="row">
              <a
                className="column"
                href="https://www.ucalgary.ca/pubs/calendar/current/digital-engineering.html"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">ENDG-233 Coursework</h3>
                <p className="project-description">
                  My intro to programming course in my first year of engineering
                  education, this course helped me fall in love with the process
                  of creating functional, useful software using python.
                </p>
                <div className="project-tags">
                  <div className="tag">
                    <img src={python_logo} className="language-logo"></img>
                    <p className="language-name">Python</p>
                  </div>
                </div>
              </a>
              <a
                className="column"
                href="https://youssefh.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">This website!</h3>
                <p className="project-description">
                  I created this website as a summer project so that I can
                  practice my web development skills I learned during my second
                  year of software engineering. It is meant to be used as an
                  easy ways for employers to learn a bit more about me that what
                  is in my resume.
                </p>
                <div className="project-tags">
                  <div className="tag">
                    <img src={react_logo} className="language-logo"></img>
                    <p className="language-name">React</p>
                  </div>
                  <div className="tag">
                    <img src={html_logo} className="language-logo"></img>
                    <p className="language-name">HTML</p>
                  </div>
                  <div className="tag">
                    <img src={css_logo} className="language-logo"></img>
                    <p className="language-name">CSS</p>
                  </div>
                  <div className="tag">
                    <img src={javascript_logo} className="language-logo"></img>
                    <p className="language-name">JavaScript</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="my-trademark">
          <p> &copy;&nbsp;Youssef Hamed 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Layout;
