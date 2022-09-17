import React from 'react'
import './achievements.css'
import SOF from '../../icon/sof.jpg'
import GCLOUD from '../../icon/gcloud.png'
import SPARKAR from '../../icon/sparkar.png'
import HACKERRANK from '../../icon/HackerRank.png'
import CODECHEF from '../../icon/codechef.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Achievements = () => {
  return (
    <section id='achievements'>
      <h2>My Achievements</h2>
      <Swiper className="container achievements_container"

        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        <SwiperSlide className="achievements">
          <div className="company_logo">
            <img src={SPARKAR} alt="" />
          </div>
          <h2>AIR 1 on Wonderathon</h2>
          <h5 className='company_name'>Meta Spark AR</h5>
          <small className="my_work">
            Wonderathon is a National Level Hackathon Organised by Reskilll in collaboration with Meta Spark AR.
            The Hackathon is Based on Augmented Reality where the participants have to create something new on
            AR using Spark AR Studio.</small>
        </SwiperSlide>


        <SwiperSlide className="achievements">
          <div className="company_logo">
            <img src={CODECHEF} alt="" />
          </div>
          <h2>3 ⭐ Coder</h2>
          <h5 className='company_name'>CodeChef</h5>
          <small className="my_work">
            CodeChef is an online platform to help programmers hone their skills in algorithms,
            programming, and contests. It hosts 3 featured contests every month and the Winners also
            recieve Prizes and Goodies.
          </small>

        </SwiperSlide>

        <SwiperSlide className="achievements">
          <div className="company_logo">
            <img src={HACKERRANK} alt="" />
          </div>
          <h2>5 ⭐ Coder</h2>
          <h5 className='company_name'>HackerRank</h5>
          <small className="my_work">
          HackerRank is a place where programmers from all over the world come together to solve problems
          in a wide range of Computer Science domains such as algorithms, machine learning, or artificial 
          intelligence, as well as to practice different programming paradigms like functional programming.
          </small>
        </SwiperSlide>

        <SwiperSlide className="achievements">
          <div className="company_logo">
            <img src={GCLOUD} alt="" />
          </div>
          <h2>Rank 14 in Google Cloud Devjam</h2>
          <h5 className='company_name'>Google Cloud</h5>
          <small className="my_work">
          Cloud DevJam is a program exclusively designed for enterprise IT professionals to help kickstart 
          your journey on the Google Cloud Platform. You can Choose the learning path based on your area of 
          interest, and along the way, compete with your peers, showcase your skills and earn exciting prizes.
          </small>
        </SwiperSlide>

        <SwiperSlide className="achievements">
          <div className="company_logo">
            <img src={GCLOUD} alt="" />
          </div>
          <h2>Rank 15 in Google Cloud Community Days India</h2>
          <h5 className='company_name'>Google Cloud</h5>
          <small className="my_work">
          Cloud Community Days is a two day, virtual, developer-focused, community driven conference themed 
          event on the various use cases of Serverless & Google Cloud.
          </small>
        </SwiperSlide>

        <SwiperSlide className="achievements">
          <div className="company_logo">
            <img src={SOF} alt="" />
          </div>
          <h2>International Rank 69 at SOF NCO</h2>
          <h5 className='company_name'>Science Olympiad Foundtion</h5>
          <small className="my_work">
          National Cyber Olympiad (NCO) is conducted by Science Olympiad Foundation (SOF). The test is 
          conducted in the concerned schools during the school hours. The exam aims at finding the top 
          talents at international, zonal and school level and reward them.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Achievements