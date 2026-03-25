import InputAdditem from "./InputAdditem";

function TagAdditem() {
  return (
    <div>
      <InputAdditem
        placeholder="태그를 입력해주세요"
        inputName="tag"
        type="text"
      >
        태그
      </InputAdditem>
    </div>
  );
}
export default TagAdditem;
