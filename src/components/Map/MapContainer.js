import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

import './MapContainer.css';

const MapContainer = () => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const center = useSelector(state => state.selectedLocation.locations);
  const zoom = 15;

  useEffect(() => {
    if (ref.current && !map) {
      const mapInstance = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      });
      setMap(mapInstance);
    }
  }, [center, map]);

  useEffect(() => {
    if (map) {
      map.setOptions({ center, zoom });
    }

    new window.google.maps.Marker({
      position: center,
      map
    });
  }, [map, center, zoom]);


  return (
     <div
      className='map-layout'
      ref={ref}
      id="map"
    />
  )
}

export default MapContainer