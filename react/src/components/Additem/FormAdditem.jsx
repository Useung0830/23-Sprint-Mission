import { useState } from "react";
import ImgAdditem from "./ImgAdditem";
import InputAdditem from "./InputAdditem";
import ProductDescriptionInput from "./ProductDescriptionInput";
import TagAdditem from "./TagAdditem";

function FormAdditem() {
  const [nameInputValue, setNameInputValue] = useState("");
  const [priceInputValue, setPriceInputValue] = useState(0);

  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    console.log("전송될 데이터:", data);
  };

  return (
    <form id="add-item-form" action={submit}>
      <ImgAdditem />
      <InputAdditem
        placeholder="상품명을 입력해주세요"
        inputName="name"
        type="text"
        value={nameInputValue}
        onChange={(e) => setNameInputValue(e.target.value)}
      >
        상품명
      </InputAdditem>
      <ProductDescriptionInput />
      <InputAdditem
        placeholder="판매 가격을 입력해주세요"
        inputName="price"
        type="number"
        value={priceInputValue}
        onChange={(e) => setPriceInputValue(e.target.value)}
      >
        판매가격
      </InputAdditem>
      <TagAdditem />
    </form>
  );
}

export default FormAdditem;
