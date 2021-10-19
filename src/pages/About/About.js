import React from "react";
import dr1 from "../../images/dr/dr1.jpg";
import dr2 from "../../images/dr/dr2.jpg";
import dr3 from "../../images/dr/dr3.jpg";
import './About.css'

const About = () => {
  return (
    <div className="container">
         <div className="row ">
         <div className="col-md-4 g-3">
       <div className="card">
    <img src={dr1} class="card-img-top" alt="..." />
         <div className="card-body">
             <h3>Dental Surgeon Maria Welsh </h3>
           <p className="card-text">Dr. Maria Welsh is dedicated to providing her patients with the most beautiful smile together with the best dental protection available nowadays. Check-ups are a major part of the job and are important for patients keeping on top of their oral care.</p>
         </div>
       </div>
       </div>
       <div className="col-md-4 g-3">
       <div className="card">
    <img src={dr2} class="card-img-top" alt="..." />
         <div className="card-body">
             <h3> Dr. Allen Fischer</h3>
           <p className="card-text">Dr. Allen Fischer is dedicated to providing her patients with the most beautiful smile together with the best dental protection available nowadays. Check-ups are a major part of the job and are important for patients keeping on top of their oral care.</p>
         </div>
       </div>
       </div> 
       <div className="col-md-4 g-3">
       <div className="card">
    <img src={dr3} class="card-img-top" alt="..." />
         <div className="card-body">
             <h3>Dr. Lisa Palmer</h3>
           <p className="card-text"> Dr. Lisa Palmer is dedicated to providing her patients with the most beautiful smile together with the best dental protection available nowadays. Check-ups are a major part of the job and are important for patients keeping on top of their oral care.</p>
         </div>
       </div>
       </div> 
    </div>
    </div>
    
  );
};

export default About;
