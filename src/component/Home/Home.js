import "./Home.css";
import CourseCard from "../CourseCard/CourseCard";
import Mid from "../midsection/Mid";
import Testimonial from "../testimonial/Testimonial";
import React, { useEffect,useState } from "react";
const Home = () => {
  let [sec,setSec]=useState(55);
  let [min,setMin]=useState(45);
  let [hr,setHr]=useState(5)
  var timer;
  useEffect(()=>{
    timer=setInterval(()=>{
      setSec(sec-=1);
      if(sec==0){
        setMin(min-=1);
        setSec(60);
      }
      if(min==0){
        setHr(hr-=1)
        setMin(60)
        setSec(60)
      }
    },1000)
    return ()=>clearInterval(timer);
  })
  return (
    <div>
      <div className="shell">
        <div className="home">
          <div className="left">
            <div className="up">
              <a className="most" href="#">
                #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
              </a>
              <div className="unleash">
                <h4>
                  Unleash Your SCRUM Skills,
                  <br />
                  Grab More Attention To Résumé
                </h4>
              </div>
              <a className="enroll" href="#">
                ENROLL NOW
              </a>
            </div>
            <div className="down">
              <p>
                <span>10% OFF on all courses* |</span> Offer Valid For
              </p>
              <div className="hz"></div>
              <div className="time">
                <div className="out">
                  <div className="num">
                    {hr}<p>Hrs.</p>
                  </div>
                </div>
                <div className="out">
                  <div className="num">
                    {min}<p>Mins.</p>
                  </div>
                </div>
                <div className="out">
                  <div className="num">
                    {sec}<p>Secs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="image-1"></div>
            <div className="image-2"></div>
            <div className="image-3"></div>
            <div className="image-4"></div>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="text">
          <p className="dark">A broad range of courses </p>
          <p className="lessdark">
            Choose from 100+ online video courses with new additions published
            every month
          </p>
        </div>
        <div className="cards">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className="section-3">
        <Mid />
      </div>
      <div className="section-4">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
