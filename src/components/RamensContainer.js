import React from "react";
import useRamen from "./useRamen";
import CountryList from "./CountryList/CountryList";

const RamensContainer = () => {
  const { ramens, countries } = useRamen();
  console.log(ramens);
  console.log("countries ", countries);
  return <CountryList countries={countries} />;
};

export default RamensContainer;
