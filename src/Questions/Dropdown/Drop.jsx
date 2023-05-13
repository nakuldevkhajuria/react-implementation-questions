import React, { useState } from 'react'
import './Style.css'

const countries = [
  {
    name: 'India',
    value: 'IN',
    cities: ['Kathua', 'Jammu']
  },
  {
    name: 'Pakistan',
    value: 'PK',
    cities: ['Lahore', 'Karachi']
  },
  {
    name: 'Bangladesh',
    value: 'BD',
    cities: ['Dhaka', 'Chittagong']
  }
];

const Drop = () => {
  const [country, setCountry] = useState({ name: '', value: '', cities: [] });

  return (
    <div className="drop">
      <select
       
        onChange={(e) => {
          const index = e.target.value
          setCountry(countries[index]);
          console.log(country)
        }}
      >
        <option value="">Select the country</option>
       
        {countries.map((item, index) => (
          <option value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <select>
        {country.cities.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Drop;
