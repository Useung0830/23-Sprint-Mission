function InputAdditem({ value, children, inputName, type, placeholder }) {
  return (
    <div>
      <label htmlFor={inputName}>{children}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={inputName}
        name={inputName}
        value={value}
      />
    </div>
  );
}
export default InputAdditem;
