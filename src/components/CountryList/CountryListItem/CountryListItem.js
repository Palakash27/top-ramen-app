import React from "react";
import styles from "./CountryListItem.module.css";
import { useHistory } from "react-router-dom";
export default function CountryListItem({ country }) {
  const history = useHistory();
  const onCountryClick = (e) => {
    localStorage.setItem("countryData", JSON.stringify(country));
    history.push(`/countries/${country.country}`);
  };

  return (
    <button className={styles.card} onClick={onCountryClick}>
      {country.country}
    </button>
  );
}
