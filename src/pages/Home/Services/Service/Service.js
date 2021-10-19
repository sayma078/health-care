import React from 'react';
// import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {service} = props;
    const {name, img, description} = service;
    return (
        <div class="col-md-6 g-3">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-info">{name}</h5>
          <p class="card-text">{description}</p>
          <br />
          <button className="btn btn-warning">Learn more</button>
        </div>
      </div>
    </div>
    );
};

export default Service;