import React, { useState } from "react";
import Globe from "react-globe.gl";

function Home() {
  const [data, setdata] = useState([]);
  const [arcdata, setarcdata] = useState([]);
  const [point_change, setPointChange] = useState(null);

  const onGlobeClick = ({ lat, lng }, event) => {
    if (point_change) {
      const new_points = data.map((point) => {
        if (point_change.id === point.id) {
          point.lat = lat;
          point.lng = lng;
          return point;
        }
        return point;
      });
      let arcs = [];
      for (let i = 0; i < arcdata.length; i++) {
        if (arcdata[i].startpt.id === point_change.id) {
          let new_arc = {
            ...arcdata[i],
            startLat: lat,
            startLng: lng,
          };
          arcs.push(new_arc);
        } else if (arcdata[i].endpt.id === point_change.id) {
          let new_arc = {
            ...arcdata[i],
            endLat: lat,
            endLng: lng,
          };
          arcs.push(new_arc);
        } else {
          arcs.push(arcdata[i]);
        }
      }
      setdata(new_points);
      setarcdata(arcs);
      setPointChange(null);
      return;
    }
    const new_point = {
      id: lat + lng + "",
      lat: lat,
      lng: lng,
      size: 0,
      color: "red",
      radius: 1.0,
      name: data.length + "",
    };
    setdata((prev) => [...prev, new_point]);
    if (data.length >= 1) {
      setarcdata((prev) => [
        ...prev,

        {
          startLat: data[data.length - 1].lat,
          startLng: data[data.length - 1].lng,
          endLat: lat,
          endLng: lng,
          color: " white",
          startpt: data[data.length - 1],
          endpt: new_point,
        },
      ]);
    }
  };
  const onPointClick = (point, event) => {
    setPointChange(point);
  };
  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      pointsData={data}
      onGlobeClick={onGlobeClick}
      pointAltitude={0}
      arcAltitude={0}
      arcsData={arcdata}
      onPointClick={onPointClick}
      pointColor={() => "orange"}
      pointRadius={1}
    />
  );
}

export default Home;
