import React, { useEffect, useState } from 'react';
import servicesData from '../../../data/services.json';
import Service from './Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(()=>{
       setServices(servicesData)
    },[])
    return (
        <div className="container " id="services" >
           <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container row">
            {
                services.map(service => <Service
                key={service.id}
                service={service}></Service>)
            }
            
        </div>
       </div>
    );
};

export default Services;