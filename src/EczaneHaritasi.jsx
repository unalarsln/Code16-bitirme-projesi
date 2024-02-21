import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const EczaneHaritasi = () => {
  const mapContainerStyle = { flex: 1 };
  const defaultCenter = { lat: 41.015137, lng: 28.979530 };

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', height: '400px' }}>
      <LoadScript googleMapsApiKey="AIzaSyDo4sDq-ZrYj0U8jvl24a_IhTz0MO7SXFo">
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={defaultCenter} />
      </LoadScript>
    </div>
  );
};

export default EczaneHaritasi;
