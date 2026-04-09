import ic_kebab from "../../assets/ic_kebab.svg";
import profile from "../../assets/profile.svg";
import { formatDate } from "../../utils/formatData";

function ItemInfo({ item }) {
  return (
    <div>
      <img src={item.images} alt={item.name} />
      <div>
        <div>
          <div>
            <h1>{item.name}</h1>
            <span>{item.price}</span>
          </div>
          <img src={ic_kebab} alt="kebab" />
        </div>
        <div>
          <div>
            <span>상품 소개</span>
            <p>{item.description}</p>
          </div>
          <div>
            <span>상품 태그</span>
            {item.tags && item.tags.length > 0 && (
              <div>
                {item.tags.map((tag, index) => (
                  <span key={`${tag}-${index}`}>#{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={profile} />
          <span>{item.ownerNickname}</span>
          <span>{formatDate(item.createdAt)}</span>
        </div>
        <span>{item.favoriteCount}</span>
      </div>
    </div>
  );
}

export default ItemInfo;
