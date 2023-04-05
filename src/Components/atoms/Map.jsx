import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Annotation,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

const Map = () => {
  return (
    <ComposableMap
      width={800}
      height={800}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -53.0, 0],
        scale: 1200,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <ZoomableGroup center={[26, 44.566]} zoom={1.5}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#5D0DC6"
                stroke="#EAEAEC"
              />
            ))
          }
        </Geographies>
        <Annotation
          subject={[33.64, 44.466]}
          dx={-45}
          dy={20}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text
            x="-8"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="#F53"
            className="text-xl"
          >
            {"yourDeveloper"}
          </text>
        </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
