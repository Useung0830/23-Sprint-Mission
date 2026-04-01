import { useNavigate } from "react-router-dom";
import styles from "./AllList.module.css";
import ButtonCreateItem from "./ButtonCreateItem.jsx";
import InputSearch from "./InputSearch.jsx";
import ListItem from "./ListItem.jsx";
import OrderSelect from "./OrderSelect.jsx";

function AllList({ items, type, search, setOrder }) {
  let navigate = useNavigate();

  return (
    <div className={styles.allList}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>전체 상품</h1>
        <InputSearch search={search} />
        <ButtonCreateItem onClick={() => navigate("/additem")}>
          상품 등록하기
        </ButtonCreateItem>
        <OrderSelect setOrder={setOrder} />
      </div>
      <ul className={styles.card}>
        {items.map((item) => (
          <li className={styles.list} key={item.id}>
            <ListItem item={item} type={type} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllList;
