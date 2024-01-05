import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import mapConfig from "./layerPickerConfig.json";
import { LayerPicker, createMap } from "webcore-map-nextgen";

function App() {
  const [mapInstance, setMapInstance] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isRefreshEnabled, setIsRefreshEnabled] = useState(false);

  const toggleModal = () => setIsOpen((oldIsOpen) => !oldIsOpen);

  useEffect(() => {
    createMap({ mapConfig }).then(setMapInstance);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LayerPicker map={mapInstance} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
