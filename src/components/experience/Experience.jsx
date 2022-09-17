import React from 'react'
import './experience.css'
import { MdDateRange } from 'react-icons/md'
const Experience = () => {
  return (
    <section id='experience'>
      <h2> My Work Experience </h2>
      <div className="container experience_container">
        <div className="experience_tabs">
          <div className="experience_button button__flex">

            <div className="experience_section" >
              <div className="experience_content">

                <div className="experience_data">
                  <div className='exp_container'>
                    <h3 className="experience_title"> Cyber Security Engage Mentee </h3>
                    <span className="experience_subtitle"> MicroSoft </span>
                    <div className="experience_calendar">
                      <i className="uil uil-calendar-alt"> <MdDateRange /> </i>
                      May 2022 - Aug 2022
                    </div>
                  </div>
                  <div>
                    <span className="experience_rounder"></span>
                    <span className="experience_line"></span>
                  </div>
                </div>

                <div className="experience_data">
                  <div></div>
                  <div>
                    <span className="experience_rounder"></span>
                    <span className="experience_line"></span>
                  </div>
                  <div className='exp_container'>
                    <h3 className="experience_title"> SDE Intern </h3>
                    <span className="experience_subtitle"> Nubivagant Technologies </span>
                    <div className="experience_calendar">
                      <i className="uil uil-calendar-alt"> <MdDateRange /> </i>
                      Jan 2022 - April 2022
                    </div>
                  </div>
                </div>


                <div className="experience_data">
                  <div className='exp_container'>
                    <h3 className="experience_title"> Cyber Security Research Intern </h3>
                    <span className="experience_subtitle"> Society for Innovation in Scientific Technological and Medical Research (SISTMR) Australia </span>
                    <div className="experience_calendar">
                      <i className="uil uil-calendar-alt"> <MdDateRange /> </i>
                      Feb 2022 - March 2022
                    </div>
                  </div>
                  <div>
                    <span className="experience_rounder"></span>
                    <span className="experience_line"></span>
                  </div>
                </div>


                <div className="experience_data">
                  <div></div>
                  <div>
                    <span className="experience_rounder"></span>
                    <span className="experience_line"></span>
                  </div>
                  <div className='exp_container'>
                    <h3 className="experience_title"> Graphics Designer Intern </h3>
                    <span className="experience_subtitle"> Samagra Foundation </span>
                    <div className="experience_calendar">
                      <i className="uil uil-calendar-alt"> <MdDateRange /> </i>
                      Dec 2021 - Jan 2022
                    </div>
                  </div>
                </div>

                <div className="experience_data">
                  <div className='exp_container'>
                    <h3 className="experience_title"> Social Media Manager Intern </h3>
                    <span className="experience_subtitle"> Devtown </span>
                    <div className="experience_calendar">
                      <i className="uil uil-calendar-alt"> <MdDateRange /> </i>
                      July 2021 - Oct 2021
                    </div>
                  </div>
                  <div>
                    <span className="experience_rounder"></span>
                    <span className="experience_line"></span>
                  </div>
                </div>


                <div className="experience_data">
                  <div></div>
                  <div>
                    <span className="experience_rounder"></span>
                    <span className="experience_line"></span>
                  </div>
                  <div className='exp_container'>
                    <h3 className="experience_title"> Business Development Intern </h3>
                    <span className="experience_subtitle"> Devtown </span>
                    <div className="experience_calendar">
                      <i className="uil uil-calendar-alt"> <MdDateRange /> </i>
                      March 2021 - Oct 2022
                    </div>
                  </div>
                </div>


                <div className="experience_data">
                  <div className='exp_container'>
                    <h3 className="experience_title"> Ninja Entrepreneur </h3>
                    <span className="experience_subtitle"> Coding Ninjas </span>
                    <div className="experience_calendar">
                      <i className="uil uil-calendar-alt"> <MdDateRange /> </i>
                      Dec 2021 - Present
                    </div>
                  </div>
                  <div>
                    <span className="experience_rounder"></span>
                    <span></span>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

