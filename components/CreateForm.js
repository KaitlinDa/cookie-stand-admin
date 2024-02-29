import React, { useState } from 'react';

export default function CreateForm({ onCreate }) {
    const [location, setLocation] = useState('');
    const [minCustomers, setMinCustomers] = useState('');
    const [maxCustomers, setMaxCustomers] = useState('');
    const [avgCookies, setAvgCookies] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
        location,
        minCustomers: Number(minCustomers),
        maxCustomers: Number(maxCustomers),
        avgCookies: Number(avgCookies),
        hourlySales: calculateHourlySales(minCustomers, maxCustomers, avgCookies),
      };
      onCreate(formData);
    };
  
    function calculateHourlySales(min, max, avg) {
      const hours = 14;
      return Array.from({ length: hours }, () => Math.floor(Math.random() * (max - min + 1) + min) * avg);
    }
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-green-300 rounded-md">
        <div className="flex gap-4">
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="flex-grow p-2 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            name="minCustomers"
            type="number"
            placeholder="Minimum Customers per Hour"
            className="flex-grow p-2 rounded"
            value={minCustomers}
            onChange={(e) => setMinCustomers(e.target.value)}
          />
          <input
            name="maxCustomers"
            type="number"
            placeholder="Maximum Customers per Hour"
            className="flex-grow p-2 rounded"
            value={maxCustomers}
            onChange={(e) => setMaxCustomers(e.target.value)}
          />
          <input
            name="avgCookies"
            type="number"
            placeholder="Average Cookies per Sale"
            className="flex-grow p-2 rounded"
            value={avgCookies}
            onChange={(e) => setAvgCookies(e.target.value)}
          />
        </div>
        <button type="submit" className="self-end px-4 py-2 text-white bg-green-500 rounded">
          Create
        </button>
      </form>
    );
  }
  
  