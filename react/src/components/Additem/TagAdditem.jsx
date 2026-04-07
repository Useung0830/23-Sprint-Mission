import { useState } from "react";
import InputAdditem from "./InputAdditem";
import styles from "./TagAdditem.module.css";
import ic_X from "../../assets/ic_X.svg";

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

  const handleDelete = (indexToDelete) => {
    setTags(tags.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className={styles.container}>
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
      <div className={styles.tagsBox}>
        {tags.map((tag, index) => (
          <div key={index} className={styles.tagContainer}>
            <div className={styles.tagWrapper}>
              {" "}
              <span className={styles.tagname}>#{tag}</span>
              <img
                onClick={() => handleDelete(index)}
                src={ic_X}
                className={styles.deleteBtn}
                alt="삭제"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TagAdditem;
