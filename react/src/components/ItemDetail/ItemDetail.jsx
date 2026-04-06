import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/data";
import { formatDate } from "../../utils/formatData";

function ItemDetail() {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadItem() {
      try {
        setIsLoading(true);
        const data = await getProduct(productId);
        setItem(data);
      } catch (error) {
        console.error("상품을 불러오는 데 실패했습니다:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (productId) {
      loadItem();
    }
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
    </div>
  );
}

export default ItemDetail;
