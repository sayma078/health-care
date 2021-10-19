import React from 'react';
import person1 from "../../../images/about/person1.jpg";
import person2 from "../../../images/about/person2.jpg";
import person3 from "../../../images/about/person3.jpg";
import person4 from "../../../images/about/person4.jpg";

const Review = () => {
    return (
        <div>
             <div className="container">
                 <h1 className="m-5">All client testimonial</h1>
         <div className="row ">
         <div class="col-md-6 g-3">
       <div >
         <img src={person1} class="card-img-top imges " alt="..." />
        <div class="card-body">
            <h3>Kristin Yang</h3>
           <p class="card-text">Like many other adults who wear braces, I wanted braces as a child,and now its quit good.</p>
         </div>
       </div>
       </div>
       <div className="col-md-6 g-3">
       <div >
         <img src={person2} class="card-img-top imges" alt="..." />
         <div class="card-body">
             <h3>Jessica Bright</h3>
          <p class="card-text">This is really amazing...u can start seeing the result within the week only after take off it!!!</p>
         </div>
       </div>
       </div>
       <div className="col-md-6 g-3">
       <div>
         <img src={person3} class="card-img-top imges" alt="..." />
         <div class="card-body">
             <h3>Trixie Python</h3>
           <p class="card-text">Fully satisfied..and very good services.</p>
         </div>
   </div>
       </div>
       <div className="col-md-6 g-3">
       <div>
     <img src={person4} class="card-img-top imges" alt="..." />
         <div class="card-body">
             <h3>Mona Yarn</h3>
           <p class="card-text">Nothing But Excellence In My Experience, dr. are just Amazing!.</p>
       </div>
     </div>
      </div>
 </div>
     </div>
        </div>
    );
};

export default Review;