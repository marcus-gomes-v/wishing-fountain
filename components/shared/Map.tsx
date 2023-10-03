import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationXmark, faMarker } from '@fortawesome/pro-solid-svg-icons';


const Map = () => {
  const iconMarkup = renderToStaticMarkup(<FontAwesomeIcon icon={faLocationXmark} className='text-teal-700' />);
  const customMarkerIcon = divIcon({
    className: '',
    iconAnchor: [12, 25],
    popupAnchor: [0, -15],
    iconSize: [25, 41],
    html: iconMarkup,
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: 400, width: "100%" }}>
      <TileLayer
        attribution='&copy; Marcus Gomes Maptile'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      <Marker position={[51.505, -0.09]} icon={customMarkerIcon} >
        <Popup>
          A pretty popup.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map