import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";

function Map({ center, zoom, markerText }) {
  return (
    <div className="map-wrapper">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map-container">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center}>
          <Popup>{markerText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;