import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true);
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }
        // setVisited(visited ? false : true);

        setVisited(!visited);

    }
    
    return (
        <div className={`country ${visited && "visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area < 3000 ? "Small Country" : "Big Country"} </p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Not visited"}</button>
        </div>
    );
};

export default Country;