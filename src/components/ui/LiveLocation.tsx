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
    <div className="flex items-center gap-3">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </div>
      <span className="font-label-caps text-[10px] text-primary/80 tracking-tighter">LIVE</span>
      <span className="font-body-md text-body-md uppercase tracking-widest transition-all duration-500">
        {location}
      </span>
    </div>
  );
}
