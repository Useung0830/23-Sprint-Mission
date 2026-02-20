import styles from "./AllList.module.css";
import BestListItem from "./BestListItem.jsx";

function AllList({ items }) {
  return (
    <div>
      <h1 className={styles.title}>전체 상품</h1>
      <ul className={styles.card}>
        {items.map((item) => (
          <li className={styles.list} key={item.id}>
            <BestListItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllList;
