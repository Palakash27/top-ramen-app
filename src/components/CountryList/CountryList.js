import CountryListItem from "./CountryListItem/CountryListItem";
import React from "react";
import styles from "./CountryList.module.css";

export default function CountryList({ countries }) {
  return (
    <div className={styles.list}>
      {countries.map((country) => (
        <CountryListItem country={country} />
      ))}
    </div>
  );
}
