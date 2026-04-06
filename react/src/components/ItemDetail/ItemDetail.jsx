import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getProductComments } from "../../api/data";
import { formatDate, formatRelativeTime } from "../../utils/formatData";

function ItemDetail() {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [productData, commentsData] = await Promise.all([
          getProduct(productId),
          getProductComments(productId),
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
      <img src={item.images} alt={item.name} />
      <h1>{item.name}</h1>
      <span>{item.price}</span>
      <p>{item.description}</p>
      <span>{item.tags}</span>
      {item.tags && item.tags.length > 0 && (
        <div>
          {item.tags.map((tag, index) => (
            <span key={`${tag}-${index}`}>#{tag}</span>
          ))}
        </div>
      )}
      <div>
        <span>{item.ownerNickname}</span>
        <span>{formatDate(item.createdAt)}</span>
        <span>{item.favoriteCount}</span>
      </div>
      <div>
        {comments.list.map((comment) => (
          <div key={comment.id}>
            <div>
              <p>{comment.content}</p>
              <div>
                <img src={comment.writer.image} alt="writer-image" />
                <div>
                  <span>{comment.writer.nickname}</span>
                  <span>{formatRelativeTime(comment.createdAt)}</span>
                </div>
              </div>
            </div>
            <img alt="kebab" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemDetail;
