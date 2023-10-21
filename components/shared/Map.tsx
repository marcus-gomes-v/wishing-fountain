import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChildReaching, faChildren, faPenSwirl } from '@fortawesome/pro-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import OurImpactComponent from './OurImpactComponent';


const Map = () => {
  const { t } = useTranslation();

  const component = (<FontAwesomeIcon icon={faChildren} className='text-[#48259fff] ' />) as any;
  const iconMarkup = renderToStaticMarkup(component);
  const customMarkerIcon = divIcon({
    className: '',
    iconAnchor: [12, 25],
    popupAnchor: [0, -15],
    iconSize: [25, 41],
    html: iconMarkup,
  }) as any;

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl py-12">
        <h2 className="text-[69px] font-bold tracking-wide text-gray-600 text-center underline decoration-wavy decoration-[#ffd24a] underline-offset-8 decoration-[8px]">{t('components.map.title')}</h2>
        <div className="py-6">
          <p className="mt-4 text-[24px] text-gray-600">
            {t('components.map.subtitle')}
          </p>
          <p className="mt-4 text-[24px] text-gray-600">
            {t('components.map.descriptionNormal')}
          </p>
        </div>
        <OurImpactComponent></OurImpactComponent>
        <h2 className="text-[69px] font-bold tracking-wide text-gray-600">
          <strong>{t('components.map.descriptionBold')}</strong>
        </h2>
      </div>
      <MapContainer center={[14.124, -33.451]} zoom={3} scrollWheelZoom={false} style={{ height: 600, width: "100%" }}>
        <TileLayer
          attribution='&copy; Marcus Gomes Maptile'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[43.7178174, -79.6898656]} icon={customMarkerIcon} >
          <Popup>
            Toronto
          </Popup>
        </Marker>
        <Marker position={[40.0292807, -105.3223777]} icon={customMarkerIcon} >
          <Popup>
            Boulder, Colorado
          </Popup>
        </Marker>
        <Marker position={[-33.915099, 18.3264211]} icon={customMarkerIcon} >
          <Popup>
            Cape Town, South Africa
          </Popup>
        </Marker>

        <Marker position={[49.2577062, -123.2063038]} icon={customMarkerIcon} >
          <Popup>
            Vancouver, Canada
          </Popup>
        </Marker>

        <Marker position={[50.0467365, 19.9224733]} icon={customMarkerIcon} >
          <Popup>
            Krakow, Poland
          </Popup>
        </Marker>

        <Marker position={[52.2328232, 20.8963905]} icon={customMarkerIcon} >
          <Popup>
            Warsaw, Poland
          </Popup>
        </Marker>

        <Marker position={[32.8205566, -96.8963597]} icon={customMarkerIcon} >
          <Popup>
            Dallas, Texas
          </Popup>
        </Marker>

        <Marker position={[38.561295, 68.6991807]} icon={customMarkerIcon} >
          <Popup>
            Tushanbe, Tajikistan
          </Popup>
        </Marker>

        <Marker position={[-12.02659, -77.1525885]} icon={customMarkerIcon} >
          <Popup>
            Lima, Peru
          </Popup>
        </Marker>

        <Marker position={[34.5535962, 69.0329241]} icon={customMarkerIcon} >
          <Popup>
            Kabul, Afeganistan
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  )
}

export default Map