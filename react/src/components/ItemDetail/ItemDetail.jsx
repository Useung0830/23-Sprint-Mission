import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, getProductComments } from "../../api/data";

import ic_back from "../../assets/ic_back.svg";
import ItemInfo from "./ItemInfo";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

function ItemDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleBack = () => {
    navigate("/items");
  };

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [productData, commentsData] = await Promise.all([
          getProduct(productId),
          getProductComments(productId, 3),
        ]);

        setItem(productData);
        setComments(commentsData);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (productId) loadData();
  }, [productId]);

  if (isLoading) return <div>로딩 중...</div>;
  if (!item) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div>
      <div>
        <ItemInfo item={item} />
        <div>
          <CommentForm productId={productId} setComments={setComments} />
          <Comments comments={comments} />
        </div>
      </div>
      <div onClick={handleBack}>
        <span>목록으로 돌아가기</span>
        <img src={ic_back} alt="back" />
      </div>
    </div>
  );
}

export default ItemDetail;
