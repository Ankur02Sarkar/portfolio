import React from "react";
import "./about.css";
import ME from "../../Ankur.png";
import { BsCodeSlash } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
const About = () => {
  return (
    <section id="about">
      <h2>Who Am I</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="Ankur Sarkar" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsCodeSlash className="about_icon" />
              <h5>Experience</h5>
              <small>1.5+ Years of Experience</small>
            </article>

            <article className="about_card">
              <GiClockwork className="about_icon" />
              <h5>Projects</h5>
              <small>27+ Projects Completed</small>
            </article>
          </div>
          {/* 

I am a Full Stack Developer with a passion for creating innovative
and user-friendly WebApps. My 2+ years of experience in the field
has given me a solid foundation in the MERN Stack. As a 3rd year
BTech ECE student, I have a strong understanding of computer science
principles and am able to apply this knowledge to my development
work. I am also well-versed in mobile app development using Flutter,
which allows me to deliver solutions that are not only responsive on
the web but also on mobile devices. I have a proven track record of
success, as demonstrated by my first rank on the Geeks For Geeks
platform and my solution of over 320 questions. I am also the web
development lead at GDSC JISCE and have interned with several
reputable organizations. This has given me valuable industry
experience and has honed my skills in project management, teamwork
and communication. As a lifelong learner, I am always eager to
expand my skillset and try out new technologies to deliver
high-quality and efficient solutions. I am confident in my ability
to deliver projects on time and to the highest standards, and I am
excited to take on new challenges and continue growing as a
developer.

 */}
          <p>
            I am a Full Stack Developer with 2+ years of experience in the MERN
            Stack. I am also well-versed in mobile app development using
            Flutter, which allows me to deliver solutions that are not only
            responsive on the web but also on mobile devices. I have a proven
            track record of success, as demonstrated by my first rank on the
            Geeks For Geeks platform at my College. I am also the Web
            Development lead at GDSC JISCE. This has given me valuable industry
            experience and has honed my skills in project management, teamwork
            and communication. As a lifelong learner, I am always eager to
            expand my skillset and try out new technologies to deliver
            high-quality and efficient solutions. I am confident in my ability
            to deliver projects on time and to the highest standards, and I am
            excited to take on new challenges and continue growing as a
            developer.
          </p>
          <div className="details about_me">
            <a href="#contact" className="btn btn-primary contact-btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
