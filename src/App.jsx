import React, { Suspense } from 'react';
import Countries from './Components/Countries/Countries';


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());

const App = () => {
  return (
    <div>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </div>
  );
};

export default App;