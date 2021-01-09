import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const MapContainer = (props) => {
    const style = {
        width: '100%',
        height: '500px'
    }
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '500px'
    }
    return (
        <Map google={props.google} zoom={14}
            style={style}
            containerStyle={containerStyle}
            zoom={15}
            initialCenter={{
                lat:6.4584,
                lng:7.5464
            }}
        >
        </Map>
    );

}

export default GoogleApiWrapper({ apiKey: '' })(MapContainer)