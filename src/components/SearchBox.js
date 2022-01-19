import React, { useState } from 'react';
import axios from 'axios';
import '../styles/searchBox.css';


const SearchBox = ({ setData }) => {

    const [id, setId] = useState()

    const search = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setData(res.data))
    }
    
    return (
        <div className='searchContainer'>
            <input type="text" placeholder='Type a location id...' onChange={e => setId(e.target.value)} value={id} />
            <button onClick={ search }>Search</button>
        </div>
    );
};

export default SearchBox;