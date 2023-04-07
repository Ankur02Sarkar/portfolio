import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
const skills = () => {
  return (
    <section id="skills">
      <h2>Skills I have</h2>
      <div className="container skills_container">
        <div className="development">
          <h3>Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Fast API</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>JavaScript </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="languages">
          <h3>Programming Languages</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>C Language</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">InterMediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Dart</h4>
                <small className="text-light">InterMediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* <div className="web3">
          <h3>WEB 3.0</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>BlockChain</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Solidity</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Solana</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Near Protocol</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Etherium</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div> */}

        <div className="database">
          <h3>DataBase</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">InterMediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>FireBase</h4>
                <small className="text-light">InterMediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="lowcode">
          <h3>Low / No Code</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Bubble</h4>
                <small className="text-light">InterMediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Wordpress</h4>
                <small className="text-light">InterMediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Locofy AI</h4>
                <small className="text-light">InterMediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
