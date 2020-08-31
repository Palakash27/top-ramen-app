import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./CountryDetailPage.module.css";
import StarRatings from "react-star-ratings";

const Item = ({ label, className, value }) => (
  <div>
    <small>{label}:</small>
    <span className={`${styles["item"]} ${styles[className]}`}>{value}</span>
  </div>
);

const getSortedRamens = (ramens) => {
  const regex = /([0-9]+) #([0-9])/i;
  ramens.sort((a, b) => {
    if (a["Top Ten"] === "NaN") {
      return 1;
    }
    if (b["Top Ten"] === "NaN") {
      return -1;
    }

    const [, aYear, aPosition] = a["Top Ten"].match(regex);
    const [, bYear, bPosition] = b["Top Ten"].match(regex);

    if (bYear === aYear) {
      return Number(aPosition) - Number(bPosition);
    } else return Number(bYear) - Number(aYear);
  });
};

export default function CountryDetailPage() {
  const [ramens, setRamens] = useState([]);
  const history = useHistory();
  const data = localStorage.getItem("countryData");
  const countryData = JSON.parse(data);

  useEffect(() => {
    if (!data) {
      history.replace("/");
    } else {
      console.log("sdfds");
      console.log(countryData);

      getSortedRamens(countryData.items);
      setRamens(countryData.items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBrandTextChange = (e) => {
    const text = e.target.value;
    const filteredRamens = countryData.items.filter((t) =>
      t.Brand.toLowerCase().includes(text.toLowerCase())
    );
    setRamens(filteredRamens);
  };

  return (
    <div className={styles["wrapper"]}>
      {countryData && (
        <h1 className={styles["country-heading"]}>{countryData.country}</h1>
      )}
      <div>
        <input
          type="text"
          className={styles["brand-text"]}
          onChange={onBrandTextChange}
          placeholder="search by brand"
        />
      </div>
      <div className={styles["ramen-list"]}>
        {ramens.map((ramen) => (
          <div className={styles["ramen-list-item"]}>
            <div className={styles["variety"]}>{ramen["Variety"]}</div>
            <div>
              {ramen["Stars"] !== "NaN" && (
                <>
                  <Item
                    label="Rating"
                    className={"rating-text"}
                    value={`${ramen["Stars"]} / 5`}
                  />

                  <StarRatings
                    rating={Number(ramen["Stars"])}
                    starRatedColor="#FFDF00"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="0"
                  />
                </>
              )}
            </div>

            <Item label="Brand" value={ramen["Brand"]} />
            <Item label="Style" value={ramen["Style"]} />
            <Item label="Country" value={ramen["Country"]} />
            <Item label="Top Ten" value={ramen["Top Ten"]} />
          </div>
        ))}
      </div>
    </div>
  );
}
