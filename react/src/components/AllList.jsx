import styles from "./AllList.module.css";
import ListItem from "./ListItem.jsx";

function AllList({ items, type, search, setOrder }) {
  return (
    <div className={styles.allList}>
      <div>
        <h1 className={styles.title}>전체 상품</h1>
        <div>
          <input onChange={search} />
          <button>상품 등록하기</button>
          <select onChange={(e) => setOrder(e.target.value)}>
            <option value="createdAt">최신순</option>
            <option value="favoriteCount">좋아요순</option>
          </select>
        </div>
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
