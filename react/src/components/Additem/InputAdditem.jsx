function InputAdditem({
  type,
  inputName,
  placeholder,
  onChange,
  children,
  ...rest
}) {
  return (
    <div>
      <label htmlFor={inputName}>{children}</label>
      <input
        id={inputName}
        name={inputName}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
export default InputAdditem;
