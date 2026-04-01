import { useState } from "react";
import InputAdditem from "./InputAdditem";

function TagAdditem() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === ",") {
      e.preventDefault();

      const trimmedValue = inputValue.trim().replace(/,/g, "");

      if (trimmedValue && !tags.includes(trimmedValue)) {
        setTags([...tags, trimmedValue]);
      }
      setInputValue("");
    }
  };

  return (
    <div>
      <InputAdditem
        placeholder="태그를 입력해주세요"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      >
        태그
      </InputAdditem>
      <input type="hidden" name="tags" value={JSON.stringify(tags)} />
      <div>
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}
export default TagAdditem;
