import styles from "./InputAdditem.module.css";

function InputAdditem({
  type,
  inputName,
  placeholder,
  onChange,
  children,
  ...rest
}) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={inputName} className={styles.subtitle}>
        {children}
      </label>
      <input
        id={inputName}
        name={inputName}
        className={styles.inputbox}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
export default InputAdditem;
