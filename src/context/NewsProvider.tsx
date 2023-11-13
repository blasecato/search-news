/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContex = createContext({});

interface Props {
  children: React.ReactElement;
}

const NewProvider = ({ children }: Props) => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNews, setTotalNews] = useState(0);

  useEffect(() => {
    const getApi = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }
      `;
      const { data } = await axios.get(url, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      });
      setNews(data.articles);
      setTotalNews(data.totalResults);
      setPage(1);
    };
    getApi();
  }, [category, country]);

  useEffect(() => {
    const getApi = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }
      `;
      const { data } = await axios.get(url, {
        headers: { "Accept-Encoding: gzip, deflate": "br" },
      });
      setNews(data.articles);
      setTotalNews(data.totalResults);
    };
    getApi();
  }, [page]);

  const onChangeCategory = (e: any) => {
    setCategory(e.target.value);
  };
  const onChangeCountry = (e: any) => {
    setCountry(e.target.value);
  };

  const handleChangePagination = (e: any, value: any) => {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
    setPage(value);
  };

  return (
    <NewsContex.Provider
      value={{
        category,
        onChangeCategory,
        news,
        onChangeCountry,
        country,
        totalNews,
        handleChangePagination,
        page,
      }}
    >
      {children}
    </NewsContex.Provider>
  );
};

export { NewProvider };
export default NewsContex;
