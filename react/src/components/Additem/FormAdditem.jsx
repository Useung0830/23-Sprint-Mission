import { useState } from "react";
import ImgAdditem from "./ImgAdditem";
import InputAdditem from "./InputAdditem";
import ProductDescriptionInput from "./ProductDescriptionInput";
import TagAdditem from "./TagAdditem";
import { useNavigate } from "react-router-dom";
import { postProduct, uploadImage } from "../../api/data";

function FormAdditem() {
  const navigate = useNavigate();
  const [nameInputValue, setNameInputValue] = useState("");
  const [priceInputValue, setPriceInputValue] = useState(0);

  const submit = async (formData) => {
    try {
      const rawData = Object.fromEntries(formData.entries());

      // 1. ImgAdditem에 설정한 name값으로 파일을 가져옵니다.
      // 만약 ImgAdditem 호출 시 name="images"라고 줬다면 "images"로 가져와야 합니다.
      const images = formData.get("images");
      let imageUrls = [];

      // 2. 파일이 존재하고 사이즈가 0보다 클 때만 업로드 실행
      if (images && images.size > 0) {
        console.log("이미지 업로드 시작...");
        const uploadedUrl = await uploadImage(images); // 👈 여기서 URL을 받아옴
        imageUrls = [uploadedUrl]; // 배열에 담기
        console.log("이미지 업로드 완료:", uploadedUrl);
      }

      // 3. 최종 데이터 조립
      const finalData = {
        name: rawData.name,
        description: rawData.description,
        price: Number(rawData.price),
        tags: rawData.tags ? JSON.parse(rawData.tags) : [],
        images: imageUrls, // 👈 여기에 위에서 받은 URL 배열이 들어가야 함
      };

      console.log("서버로 보낼 최종 데이터:", finalData);

      await postProduct(finalData);
      alert("상품 등록 성공!");
      navigate("/");
    } catch (error) {
      console.error("등록 실패:", error);
    }
  };

  return (
    <form id="add-item-form" action={submit}>
      <ImgAdditem name="images" />
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
