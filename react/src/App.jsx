import styles from "./App.module.css";
import BestList from "./components/BestList";
import Header from "./components/Header";
import axios from "./utils/axios";
import AllList from "./components/AllList";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [orderBy, setOrderBy] = useState("recent");
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // // 화면 크기 변화 감지
  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // // 화면 크기에 따른 pageSize 결정 함수
  // const getPageSize = () => {
  //   if (windowWidth <= 375) return 4;
  //   if (windowWidth <= 744) return 6;
  //   return 10; // 기본값 (PC)
  // };

  // const getBestSize = () => {
  //   if (windowWidth <= 375) return 1;
  //   if (windowWidth <= 744) return 2;
  //   return 4; // 기본값 (PC)
  // };

  // const pageSize = getPageSize();
  // const bestSize = getBestSize();

  //검색 키워드 저장
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  const handleOrderChange = (newOrder) => {
    setOrderBy(newOrder);
    setPage(1);
  };

  //베스트 상품 4개 가져오기
  const loadBestItems = async () => {
    try {
      const response = await axios.get("/Products", {
        params: {
          orderBy: "favorite",
          pageSize: 4,
        },
      });

      setBestItems(response.data.list);
    } catch (error) {
      console.error("베스트 상품 로드 실패:", error);
    }
  };

  //전체 상품 가져오기
  const itemsLoad = async (currentPage, currentOrder, currentKeyword) => {
    console.log("검색어 전달 확인:", currentKeyword);
    try {
      const response = await axios.get(`/Products`, {
        params: {
          orderBy: currentOrder,
          page: currentPage,
          pageSize: 10,
          keyword: currentKeyword,
        },
      });
      setItems(response.data.list);
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.error("에러 상세:", error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadBestItems();
  }, []);

  useEffect(() => {
    itemsLoad(page, orderBy, keyword);
  }, [page, orderBy, keyword]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <BestList items={bestItems} type="best" />
        <AllList
          items={items}
          type="all"
          search={handleKeywordChange}
          setOrder={handleOrderChange}
        />
      </div>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        totalCount={totalCount}
      />
    </div>
  );
}

export default App;
