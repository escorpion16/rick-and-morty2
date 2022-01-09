import React from 'react';

const LocationInfo = ({name, type, dimension, residentsLength}) => {

    return (
        <div>
            <div><h2><b> {name} </b></h2></div>
            <div>
                <h3><b> Type: </b>{type}</h3>
                <h3><b> Dimension: </b>{dimension}</h3>
                <h3><b> Population: </b>{residentsLength}</h3>
            </div>
        </div>
    );
};

export default LocationInfo;

