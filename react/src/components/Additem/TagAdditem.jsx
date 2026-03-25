import { useState } from "react";
import InputAdditem from "./InputAdditem";

function TagAdditem() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <InputAdditem
        placeholder="태그를 입력해주세요"
        inputName="tags"
        type="text"
        value={inputValue}
      >
        태그
      </InputAdditem>
    </div>
  );
}
export default TagAdditem;
