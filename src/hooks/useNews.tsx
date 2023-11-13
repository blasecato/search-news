import { useContext } from "react";
import NewsContex from "../context/NewsProvider";

const useNews = () => {
  return useContext(NewsContex);
};

export default useNews;
