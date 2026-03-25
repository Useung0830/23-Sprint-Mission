function ProductDescriptionInput() {
  return (
    <div>
      <label htmlFor="descriptiont">상품 소개</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="상품 소개를 입력해주세요"
      />
    </div>
  );
}

export default ProductDescriptionInput;
