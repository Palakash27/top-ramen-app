import { useEffect, useState } from "react";
import { ramenService } from "../services/ramenService";

const getCountries = (ramens) => {
  let countries = ramens.map((ramen) => {
    return ramen.Country;
  });
  countries = [...new Set(countries)].sort();
  let countriesData = countries.map((country) => {
    return {
      country,
      items: ramens.filter((ramen) => ramen.Country === country),
    };
  });
  return countriesData;
};

const useRamen = () => {
  const [ramens, setRamens] = useState([]);

  useEffect(() => {
    fetchRamens();
  }, []);

  const fetchRamens = async () => {
    const response = await ramenService.getRamens();
    setRamens(response.ramens);
  };
  return { ramens, countries: getCountries(ramens) };
};
export default useRamen;
