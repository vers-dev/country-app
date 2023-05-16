import Card from "../components/Card";
import { useState, useEffect } from "react";
import { Select, Input } from "antd";
import SkeketonLoader from "../components/CotentLoader";

const { Search } = Input


const HomePage = () => {

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://restcountries.com/v3.1/${region ? `region/${region}` : `all`}`)
      .then(response => response.json())
      .then((data) => setCountries(data))
      .finally(() => setIsLoading(false));
  }, [region])


  const handleChangeFilterValue = (value) => {
    return setRegion(value);
  }

  const onChangeSearchValue = (value) => {
    console.log(value);
    return setSearchValue(value.toLowerCase());
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <Search
            placeholder="input search text"
            onSearch={onChangeSearchValue}
            style={{ width: 200 }} />
          <Select
            defaultValue=""
            style={{ width: 150 }}
            onChange={handleChangeFilterValue}
            options={[
              { value: '', label: 'Filter By Region' },
              { value: 'africa', label: 'Africa' },
              { value: 'america', label: 'America' },
              { value: 'asia', label: 'Asia' },
              { value: 'europe', label: 'Europe' },
              { value: 'oceania', label: 'Oceania' },
            ]}
          />
        </div>
        <div className="section-content">
          <div className="grid">
            {isLoading ? (
              <SkeketonLoader />
            ) : (
              countries
                .filter((item) => item?.name?.common.toLowerCase().includes(searchValue))
                .map((item, index) => (
                  <Card key={index} card={item} />
                ))
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;