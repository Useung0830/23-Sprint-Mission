import { useNavigate } from "react-router-dom";
import ic_back from "../../assets/ic_back.svg";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/items");
  };

  return (
    <div onClick={handleBack}>
      <span>목록으로 돌아가기</span>
      <img src={ic_back} alt="back" />
    </div>
  );
}

export default BackButton;
