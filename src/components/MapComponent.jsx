// MapComponent.jsx
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

const MapComponent = ({searchTerm}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // prevent map from initializing more than once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // initial center
      zoom: 9,
    });
  }, []);

  useEffect(()=>{
    if(!map.current) return;

    if (searchTerm){
        // Geocode the searchTerm and update the map center
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchTerm)}.json?access_token=${mapboxgl.accessToken}`)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const coordinates = data.features[0].center;
                map.current.flyTo({
                    center: coordinates,
                    zoom: 12,
                });
            } else {
                console.log('Location not found.');
            }
        }).catch(error=>{
            console.error("error fetching location", error)
        })
    }
  }, [searchTerm])

  return <div ref={mapContainer} className="w-full h-2" />;
};

export default MapComponent;