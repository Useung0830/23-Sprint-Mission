import ButtonAdditem from "../../components/Additem/ButtonAdditem";
import ImgAdditem from "../../components/Additem/ImgAdditem";
import InputAdditem from "../../components/Additem/InputAdditem";
import ProductDescriptionInput from "../../components/Additem/ProductDescriptionInput";
import TagAdditem from "../../components/Additem/TagAdditem";

function AdditemPage() {
  return (
    <>
      <div>
        <h1>상품 등록하기</h1>
        <ButtonAdditem />
      </div>
      <div>
        <ImgAdditem />
        <InputAdditem
          placeholder="상품명을 입력해주세요"
          inputName="ProductName"
          type="text"
        >
          상품명
        </InputAdditem>
        <ProductDescriptionInput />
        <InputAdditem
          placeholder="판매 가격을 입력해주세요"
          inputName="ProductName"
          type="number"
        >
          판매가격
        </InputAdditem>
        <TagAdditem />
      </div>
    </>
  );
}
export default AdditemPage;
