import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChildReaching } from '@fortawesome/pro-solid-svg-icons';


const Map = () => {
  const component = (<FontAwesomeIcon icon={faChildReaching} className='text-teal-700' />) as any;
  const iconMarkup = renderToStaticMarkup(component);
  const customMarkerIcon = divIcon({
    className: '',
    iconAnchor: [12, 25],
    popupAnchor: [0, -15],
    iconSize: [25, 41],
    html: iconMarkup,
  }) as any;

  return (
    <MapContainer center={[14.124, -33.451]} zoom={3} scrollWheelZoom={false} style={{ height: 600, width: "100%" }}>
      <TileLayer
        attribution='&copy; Marcus Gomes Maptile'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      <Marker position={[51.505, -0.09]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[51.93201629362751, 4.47222238830505]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[52.245017153610895, 21.004194034900525]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[-33.9390281926236, 18.48023097787878]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[38.55048138550833, 68.76439608135253]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[-8.650154697196562, 115.21568149476032]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[25.1791277824668, 55.2405212609074]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[30.282756856530355, -97.74064855047236]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[36.1482790387559, -86.80310967109904]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[-23.964817402056706, -46.332132273367925]} icon={customMarkerIcon} >
      </Marker>
      <Marker position={[41.16462252688111, -8.639481117847707]} icon={customMarkerIcon} >
      </Marker>
      
    </MapContainer>
  )
}

export default Map