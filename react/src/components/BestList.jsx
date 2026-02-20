import BestListItem from "./BestListItem.jsx";
import styles from "./BestList.module.css";

function BestList({ items }) {
  return (
    <div>
      <h1 className={styles.title}>베스트 상품</h1>
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

export default BestList;
