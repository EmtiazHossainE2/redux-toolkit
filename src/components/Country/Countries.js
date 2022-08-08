import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../app/features/country/countrySlice';

const Countries = () => {
  const { isLoading, countries, error } = useSelector((state) => state.countries)
  // console.log(countries)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])


  return (
    <div className='my-5'>
      <h2 className='text-center py-5'>All Country {countries.length}</h2>
      <div className="text-center pb-3">
      {isLoading && <h2>Loading ....</h2>}
      {error && <h2>{error.message}</h2>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-12 gap-5 rounded-lg ">
        {countries.map((country, index) => {
          return <article key={index} className="border shadow-lg p-6 space-y-2">
            <h4>Country Name : {country.name.common}</h4>
            <p>Population {country.population}</p>
            <p>Area {country.area}</p>
            <img src={country.flags.png} alt="country flag" width={200} />
          </article>
        })}
      </div>
    </div>
  );
};

export default Countries;