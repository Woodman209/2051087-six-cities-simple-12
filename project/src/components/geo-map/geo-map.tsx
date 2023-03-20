import { City, Offers, Offer } from '../../types/type';
import 'leaflet/dist/leaflet.css';
import styles from './geo-map.module.css';
import { useRef } from 'react';
import { useGeoMap } from './use-geo-map';
import { useGeoMapPins } from './use-geo-map-pins';

type GeoMapProps = {
  className: string;
  currentCity: City;
  offers: Offers;
  activeOffer: Offer | null;
}

function GeoMap(props: GeoMapProps): JSX.Element {
  const nodeRef = useRef<HTMLElement | null>(null);
  const geoMap = useGeoMap(nodeRef, props.currentCity);
  useGeoMapPins(geoMap, props.offers, props.activeOffer);

  return (
    <section
      className={`${props.className} ${styles.map}`}
      ref={nodeRef}
    >
    </section>
  );
}

export default GeoMap;

