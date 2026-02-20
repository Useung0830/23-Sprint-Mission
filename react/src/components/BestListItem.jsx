import styles from "./BestListItem.module.css";
import Heart from "../../../images/favoriteHeart.svg";

function BestListItem({ item }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={item.images} />
      <div className={styles.description}>
        <h2 className={styles.cardTitle}>{item.name}</h2>
        <span className={styles.cardPrice}>{item.price}</span>
        <div className={styles.favorite}>
          <img src={Heart} />
          <span className={styles.cardFavoriteCount}>{item.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

export default BestListItem;
