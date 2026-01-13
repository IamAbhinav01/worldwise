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
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className={styles.date}>{formatDate(city.date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
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
