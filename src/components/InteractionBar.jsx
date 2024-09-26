import "../App.css";
import React, { useState, useEffect } from "react";
const InteractionBar = ({startLocation,endLocation,clearLocations,directions,getDirections}) => {

    return ( 
        <div className="InteractionBar">
            <div className="PathInput">
                <div>
                    Start: {startLocation}
                </div>
                <div>
                    End: {endLocation}
                </div>
                <button onClick={getDirections}>Get Route</button>
                <button onClick={clearLocations}>Clear</button>
            </div>
            {('error' in directions)?
            <div className="DirectionContainer">
                <div className={"InvalidRoute"}>
                <strong>No Valid Routes</strong><br/><p1 className="DirectionBody"></p1>
                </div>
            </div>
            :
            <div className="DirectionContainer">
                {directions.map(([distance,destination,type,distanceBetween],index,arr)=>(
                <div className={type=='t'?"TunnelDirection":"AboveGroundConnectionDirection"}>
                <strong>{destination}</strong><br/><p1 className="DirectionBody">{`Take the ${(type=='t'?"tunnel":"above ground connection")} for ${distanceBetween} feet to reach ${(index<arr.length-1)?arr[index+1][1]:endLocation}`}</p1>
                </div>
            ))}
            </div>
            }
        </div>
     );
}
 
export default InteractionBar;