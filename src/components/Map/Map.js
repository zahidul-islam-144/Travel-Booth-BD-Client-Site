import React, { useEffect } from "react";
import "./Map.css";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

const Map = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiemlzbGFtMTQ0IiwiYSI6ImNrdzRucGY2aDZrbWQyb210YXJ3Mms3NWQifQ.aXibN8mywr5gwUzYokv-Hg";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.4368458, 23.8195825],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);

  return (
    <div className="map-container">
      <h1 className="text-center p-3 mt-5 mb-5">
        Find your desired location 
      </h1>
      <div id="showMap" className="show-map">
        <div id="map"></div>
      </div>
    </div>
  );
};

export default Map;
