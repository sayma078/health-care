import React from "react";
import person1 from "../../images/about/person1.jpg";
import person2 from "../../images/about/person2.jpg";
import person3 from "../../images/about/person3.jpg";
import person4 from "../../images/about/person4.jpg";
import dr1 from "../../images/dr/dr1.jpg";
import dr2 from "../../images/dr/dr2.jpg";
import dr3 from "../../images/dr/dr3.jpg";
import './About.css'

const About = () => {
  return (
    // <div className="container">
    //     <div className="row ">
    //     <div class="col-md-6 g-3">
    //   <div class="card">
    //     <img src={person1} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //         <h3>Tooth extraction aftercare:</h3>
    //       <p class="card-text">A how-to guide Tooth extraction involves completely removing a tooth from the mouth.</p>
    //     </div>
    //   </div>
    //   </div>
    //   <div className="col-md-6 g-3">
    //   <div class="card">
    //     <img src={person2} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //         <h3>The unexpected dangers of gum disease</h3>
    //       <p class="card-text">Gum disease is common and unpleasant, but, according to a growing body of evidence,</p>
    //     </div>
    //   </div>
    //   </div>
    //   <div className="col-md-6 g-3">
    //   <div class="card">
    //     <img src={person3} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //         <h3>What to know about tooth extraction</h3>
    //       <p class="card-text">Dentists and oral surgeons perform tooth extractions for many reasons.</p>
    //     </div>
    //   </div>
    //   </div>
    //   <div className="col-md-6 g-3">
    //   <div class="card">
    //     <img src={person4} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //         <h3>Teeth: Names, types, and functions</h3>
    //       <p class="card-text">Teeth help a person use their mouth to eat, smile, and give shape to face.</p>
    //     </div>
    //   </div>
    //   </div>
    // </div>
    // </div>
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
