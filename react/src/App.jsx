import styles from "./App.module.css";
import BestList from "./components/BestList";
import Header from "./components/Header";
import axios from "./utils/axios";
import AllList from "./components/AllList";
import { useEffect, useState } from "react";

function App() {
  const [order, setOrder] = useState();
  const [items, setItems] = useState([]);

  const itemsLoad = async () => {
    const response = await axios.get("/Products");
    const data = response.data.list;
    setItems(data);
  };

  const sortedBestItems = [...items]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  useEffect(() => {
    itemsLoad();
  }, []);

  const sortedAllList = [...items]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 8);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <BestList items={sortedBestItems} />
        <AllList items={sortedAllList} />
      </div>
    </>
  );
}

export default App;
