import ImgAdditem from "./ImgAdditem";
import InputAdditem from "./InputAdditem";
import ProductDescriptionInput from "./ProductDescriptionInput";
import TagAdditem from "./TagAdditem";

function FormAdditem() {
  return (
    <form>
      <ImgAdditem />
      <InputAdditem
        placeholder="상품명을 입력해주세요"
        inputName="name"
        type="text"
      >
        상품명
      </InputAdditem>
      <ProductDescriptionInput />
      <InputAdditem
        placeholder="판매 가격을 입력해주세요"
        inputName="price"
        type="number"
      >
        판매가격
      </InputAdditem>
      <TagAdditem />
    </form>
  );
}

export default FormAdditem;
