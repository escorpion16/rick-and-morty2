import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ residentUrl }) => {
    
    const [dataResident, setDataResident] = useState(null)

    useEffect(() => {
        const myFunc = async() => {
            const res = await fetch(`${residentUrl}`)
            .then(res => res.json())

            setDataResident(res)
        }

        myFunc()
    },[residentUrl])


    return (
        <div>
            <h3>{dataResident?.name}</h3>
            <img src={dataResident?.image} alt={dataResident?.name}/>
            <h3>{dataResident?.status} - {dataResident?.species}</h3>
            <h3>{dataResident?.origin.name}</h3>
            <h3>{dataResident?.episode.length}</h3>
        </div>
    );
};

export default ResidentInfo;