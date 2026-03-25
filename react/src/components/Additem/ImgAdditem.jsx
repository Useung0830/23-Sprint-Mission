import { useEffect, useRef, useState } from "react";
import placeholderImage from "../../assets/placeholderImage.svg";
import styles from "./ImgAdditem.module.css";

function ImgAdditem({ name }) {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    setFile(nextFile);
  };

  const handleClear = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <div>
      <span>상품 이미지</span>
      <div>
        <input
          name={name}
          type="file"
          onChange={handleChange}
          ref={inputRef}
          hidden
        />

        <img
          className={styles.fileImg}
          src={placeholderImage}
          onClick={handleClick}
        />
        {file && (
          <div>
            <img src={preview} className={styles.fileImg} />{" "}
            <div onClick={handleClear}>X</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImgAdditem;
