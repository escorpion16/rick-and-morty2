import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import SearchBox from './components/SearchBox';

const App = () => {
  const [data, setData] =  useState(null)
  
  const numberRandom = (Math.floor(Math.random() * 126) + 1)

  useEffect(() => {
 
      axios.get(`https://rickandmortyapi.com/api/location/${numberRandom}`)
      .then(res => setData(res.data))

  },[])

  return (
    <div className="App">
      <div className='banner'></div>
      <h1>Rick and Morty</h1>
      {data && <SearchBox setData={setData}/>}
      {data && <LocationInfo name={data.name} type={data.type} dimension={data.dimension} residentsLength={data.residents.length} />}
      <div className='residentCard'>
        {data && <ResidentsList data={data}/>}
      </div>
    </div>
  );
}



export default App;
