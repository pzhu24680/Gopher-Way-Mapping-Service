import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import InteractionBar from './components/InteractionBar';
import React, { useState, useEffect } from "react";
function App() {
  const[startLocation,setStartLocation]=useState('')
  const[endLocation,setEndLocation]=useState('')
  const[directions,setDirections]=useState([])

  const handleMapSelection=(location)=>{
    if(!startLocation){
        setStartLocation(location)
    }
    else{
        setEndLocation(location)
    }
    console.log(startLocation,endLocation)
}
const clearLocations=()=>{
  setStartLocation('');
  setEndLocation('');
  setDirections([]);
}

const convertToURLParam=(param)=>{
  let output=''
  for(let i=0;i<param.length;i++){
    if(param[i]==" "){
      output+="%20"
    }
    else{
      output+=param[i]
    }
  }
  return output
}
const getDirections=()=>{
  let URLParamStart=convertToURLParam(startLocation)
  let URlParamEnd=convertToURLParam(endLocation)
  fetch(`https://routing-app.herokuapp.com/shortestpath/${URLParamStart}/${URlParamEnd}`).then((response) => response.json())
  .then((data) => {
    setDirections(data);
  })
}
  return (
    <div >
      <main className="App">
        <InteractionBar startLocation={startLocation} endLocation={endLocation} clearLocations={clearLocations} directions={directions} getDirections={getDirections}/>
        <Map handleMapSelection={handleMapSelection}/>
      </main>
    </div>
  );
}

export default App;
