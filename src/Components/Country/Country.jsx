import React from 'react';
import './Country.css'

const Country = ({country}) => {
    
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area < 3000 ? "Small Country" : "Big Country"} </p>
        </div>
    );
};

export default Country;