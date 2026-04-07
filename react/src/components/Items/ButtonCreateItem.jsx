import styles from "./ButtonCreateItem.module.css";

function ButtonCreateItem({ children, onClick }) {
  return (
    <button className={styles.createBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonCreateItem;
