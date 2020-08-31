import { httpService } from "../utlis/httpService";

const getRamens = async () => {
  const url = "http://starlord.hackerearth.com/TopRamen";
  const data = await httpService.get(url);
  return { ramens: data };
};

export const ramenService = {
  getRamens,
};
