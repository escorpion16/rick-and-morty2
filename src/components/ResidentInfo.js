import React, { useEffect, useState } from 'react';
import "../styles/residentInfo.css";

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
        <div className='residentContainer'>
            <div className='residentPhoto'>
                <img src={dataResident?.image} alt={dataResident?.name}/>
            </div>
            <div className='residentContent'>
                <h3>{dataResident?.name}</h3>
                <div className='infoStatus'>
                    <div className={dataResident?.status === 'Alive' ?  'circleStatusGreen' : dataResident?.status === 'Dead' ? 'circleStatusRed' : 'circleStatusGray'} ></div>
                    <h5>{dataResident?.status} - {dataResident?.species}</h5>
                </div>
                <h5>Origin: {dataResident?.origin.name}</h5>
                <h5>Episodes where appear: {dataResident?.episode.length}</h5>
            </div>
        </div>
    );
};

export default ResidentInfo;