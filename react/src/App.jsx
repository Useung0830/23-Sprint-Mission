import styles from "./App.module.css";
import BestList from "./components/BestList";
import Header from "./components/Header";
import axios from "./utils/axios";
import AllList from "./components/AllList";
import { useEffect, useState } from "react";

function App() {
  const [order, setOrder] = useState("createAt");
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const itemsLoad = async () => {
    const response = await axios.get("/Products");
    const data = response.data.list;
    setItems(data);
  };

  const sortedBestItems = [...items]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  const sortedAllList = [...items]
    .sort((a, b) => new Date(b[order]) - new Date(a[order]))
    .filter((item) => item.name.includes(keyword));

  useEffect(() => {
    itemsLoad();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <BestList items={sortedBestItems} type="best" />
        <AllList
          items={sortedAllList}
          type="all"
          search={handleKeywordChange}
          setOrder={setOrder}
        />
      </div>
    </>
  );
}

export default App;
