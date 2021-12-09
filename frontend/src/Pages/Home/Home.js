import React, { useState, useEffect ,useMemo} from 'react';
import Globe from "react-globe.gl";

function Home() {
  const [data, setdata] = useState([])
  const [arcdata,setarcdata]=useState([])

  const onGlobeClick = ({ lat, lng }, event) => {

    setdata((prev) => [
      ...prev,
      { lat: lat,
        lng: lng,  
        size: 0,
        color: "red",
        radius: 1.0,
        name:data.length+''
        },
    ]);
    if(data.length>=1)
    {
    
      setarcdata((prev)=>[
        ...prev,
        
          {
            startLat: data[data.length-1].lat,
            startLng: data[data.length-1].lng,
            endLat: lat,
            endLng: lng,
            color: " white"
          }
        
      ]);

    }
    //setdata(temp);
    console.log(data);
  };
 const onPointClick=((point,event)=>{
   console.log(point);
 })
  return <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    pointsData={data}
    onGlobeClick={onGlobeClick}
    pointAltitude={0}
    arcAltitude={0}
    arcsData={arcdata}
    onPointClick={onPointClick}
    pointColor={() => 'orange'}

  />
  
}

export default Home
