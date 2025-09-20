import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log("handle visited country clicked",country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        console.log("clicked", flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In the Countries: {countries.length} </h1>
            <p>Total visited Countries: {visitedCountries.length} </p>
            <p>Total visited Flags: {visitedFlags.length} </p>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div>

            </div>
            <div className="countries">
                {
                countries.map(country => <Country key={country.cca3.cca3}
                     country={country}
                     handleVisitedCountries={handleVisitedCountries}
                     handleVisitedFlags={handleVisitedFlags}
                     >
                     </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;