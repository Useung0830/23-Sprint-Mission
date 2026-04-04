import { useEffect, useRef, useState } from "react";
import placeholderImage from "../../assets/placeholderImage.svg";
import ic_X from "../../assets/ic_X.svg";
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
    <div className={styles.container}>
      <span className={styles.subtitle}>상품 이미지</span>
      <div className={styles.imgBox}>
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
          <div className={styles.previewContainer}>
            <img src={preview} className={styles.fileImg} />{" "}
            <div className={styles.ic_X} onClick={handleClear}>
              <img src={ic_X}></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImgAdditem;
