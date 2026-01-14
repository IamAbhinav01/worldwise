import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './CityItem.module.css';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
  console.log(city);
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    country: PropTypes.string,
    date: PropTypes.string,
    notes: PropTypes.string,
    position: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }).isRequired,
};

export default CityItem;
