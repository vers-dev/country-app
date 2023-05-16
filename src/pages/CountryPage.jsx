import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import SkeketonLoader from "../components/CotentLoader";
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const CountryPage = () => {

  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({});
  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [isCopy, copy] = useCopyToClipboard();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then((data) => {
        data = data.pop()
        setCountry(data);
        setLanguages(Object.values(data.languages));
        setCurrencies(Object.values(data.currencies).map(item => item.name));
      })
      .finally(() => setIsLoading(false));
  }, [name])


  if (isLoading) return <SkeketonLoader />

  return (
    <>
      <section className="section country">
        <div className="container">
          <div className="section-header">
            <Link to='/' className="btn">Назад</Link>
          </div>
          <div className="section-content">
            <div className="country-grid">
              <img src={country?.flags?.png} alt={country?.flags?.alt} className="country_img" />
              <div className="country-info">
                <h2>{country?.name?.common} | <span onClick={() => copy(country?.name?.common)}>Копировать</span></h2>
                <ul className="country-props">
                  <li><span className="bold-text">Native Name:</span> {country?.name?.common}</li>
                  <li><span className="bold-text">Population:</span> {country.population}</li>
                  <li><span className="bold-text">Region:</span> {country.region}</li>
                  <li><span className="bold-text">Subregion:</span> {country.subregion}</li>
                  <li><span className="bold-text">Capital:</span> {country.capital}</li>
                  <li><span className="bold-text">Top Level Domain:</span> {country.tld}</li>
                  <li><span className="bold-text">Currencies:</span> {currencies.join(', ')}</li>
                  <li><span className="bold-text">Languages:</span> {languages.join(', ')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CountryPage;