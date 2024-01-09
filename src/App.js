import React, { useState, useEffect } from "react";
import "./App.css";
import mapConfig from "./layerPickerConfig.json";
import "webcore-map-nextgen/webcore-map-nextgen.css";
import { LayerPicker, createMap } from "webcore-map-nextgen";

window.React = React;

const mapContainerStyle = {
  flex: 3,
  height: "600px",
};

function App() {
  const [mapInstance, setMapInstance] = useState(null);

  const loadingRef = React.useRef(false);

  useEffect(() => {
    const createMapAsync = async () => {
      const map = await createMap({
        mapConfig,
      });

      setMapInstance(map);
      loadingRef.current = false;
    };

    if (!loadingRef.current) {
      loadingRef.current = true;
      createMapAsync();
    }

    return () => {
      mapInstance?.setTarget(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div id="map" style={mapContainerStyle}></div>
        <LayerPicker map={mapInstance} />
      </div>
    </div>
  );
}

export default App;
