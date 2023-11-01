import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("story");
  const [show, setShow] = useState(false);

  useEffect(() => {
        setIsLoading(true);
        const getResult = async () => {
            axios.get(`http://hn.algolia.com/api/v1/search?query=${search}&tags=${category}`).then((res) => {
                if (res.status === 200) {
                    setIsLoading(false);  
                    show ? setResults(res?.data?.hits) : setResults(res?.data?.hits.slice(0, 4))
                }
            })
        }
        getResult()
  },[search, category, show])

  return (
    <ResultContext.Provider value={{ setShow, show, results, isLoading, setCategory, category, setSearch }} >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext)