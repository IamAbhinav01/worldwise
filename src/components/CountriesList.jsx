import CountryItem from './CountryItem.jsx';
import styles from './CountryList.module.css';
import Message from './Message.jsx';
import Spinner from './Spinner.jsx';
import PropTypes from 'prop-types';

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((acc, city) => {
    if (!acc.some((el) => el.country === city.country)) {
      acc.push({
        country: city.country,
        emoji: city.emoji,
      });
    }
    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

CountriesList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CountriesList;
