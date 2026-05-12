"use client";

import React, { useEffect, useState } from 'react';

export default function LiveLocation() {
  const [location, setLocation] = useState('MIRA ROAD, THANE / INDIA');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.city && data.country_name) {
          setLocation(`${data.city.toUpperCase()}, ${data.region.toUpperCase()} / ${data.country_name.toUpperCase()}`);
        }
      } catch (error) {
        console.error('Failed to fetch location:', error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <span className="font-body-md text-body-md uppercase tracking-widest transition-all duration-500">
      {location}
    </span>
  );
}
