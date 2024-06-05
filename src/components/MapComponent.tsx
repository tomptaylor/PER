import { createSignal, createResource } from "solid-js";
import { onCleanup } from "solid-js";
import "ol/ol.css"; // Import OpenLayers styles
import Map from "ol/Map"; // Import the Map class
import View from "ol/View"; // Import the View class
import TileLayer from "ol/layer/Tile"; // Import the TileLayer class
import OSM from "ol/source/OSM"; // Import the OSM (OpenStreetMap) source
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";

const MapComponent = () => {
  //create the map
  let map;

  // Create a signal for the map container reference
  const [mapContainer, setMapContainer] = createSignal(null);

  const fetchGEO = async () => {
    //const geoJsonFormat = new GeoJSON();
    //const response = await fetch('http://localhost:8080/airports.geojson');
    const response = await fetch("http://localhost:8080/region-5a.geojson");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch GeoJSON: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    //const features = geoJsonFormat.readFeatures(data);
    const vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(data, {
        featureProjection: "EPSG:3857",
      }),
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      // style: mystyle
    });
    map.addLayer(vectorLayer);
  };

  // When the component mounts, initialize the map
  onCleanup(() => {
    if (map) {
      map.dispose();
    }
  });

  // Function to initialize the map
  function initMap(container) {
    if (!container) return;

    // Create a new instance of the Map class
    map = new Map({
      target: container,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        //   new VectorLayer({
        //     source: source
        // })
      ],
      view: new View({
        // Set the initial center and zoom level
        center: [-9897680.93234967, 4770225.269279752],
        zoom: 5,
      }),
    });
    map.on("wheel", (event) => {
      event.preventDefault();
    });
  }

  // Function to update the map instance (if needed)
  const updateMap = () => {
    // Example: Change the map view
    fetchGEO();
    map.getView().setCenter([-8397680.93234967, 4770225.269279752]);
    map.getView().setZoom(3);
  };

  return (
    <div>
      {/* Attach the map container to the signal */}
      <div ref={setMapContainer} style="width: 100%; height: 400px;"></div>
      {/* Initialize the map when the container is ready */}
      {mapContainer() && initMap(mapContainer())}
      <button onClick={updateMap}>Add Airports</button>
      <button onClick={updateMap}>Add Region1</button>
    </div>
  );
};
export default MapComponent;
