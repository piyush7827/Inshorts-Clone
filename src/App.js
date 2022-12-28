import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import axios from "axios";
import API_KEY from "./keys";
import { useEffect } from "react";
import NavContents from "./components/NavContents/NavContents";

function App() {
  const [category, setCategory] = useState("general");
  const [newsResults, setNewsresults] = useState();
  const [newsArray, setNewsArray] = useState([]);
  const [loadMore, setLoadMore] = useState(10);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&psgeSize=${loadMore}`
      );
      console.log(news);
      setNewsArray(news.data.articles);
      setNewsresults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [category, loadMore, newsResults]);
  return (
    <div className="App">
      <Nav setCategory={setCategory} />
      <NavContents
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
    </div>
  );
}

export default App;
