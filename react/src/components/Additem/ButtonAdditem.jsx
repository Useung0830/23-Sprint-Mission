import styles from "./ButtonAdditem.module.css";

function ButtonAdditem({ disabled }) {
  return (
    <button
      className={styles.addbutton}
      form="add-item-form"
      type="submit"
      disabled={disabled}
    >
      등록
    </button>
  );
}
export default ButtonAdditem;
