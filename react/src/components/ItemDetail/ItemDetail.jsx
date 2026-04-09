import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProduct,
  getProductComments,
  postProductComment,
} from "../../api/data";
import { formatDate, formatRelativeTime } from "../../utils/formatData";
import ic_kebab from "../../assets/ic_kebab.svg";
import profile from "../../assets/profile.svg";
import ic_back from "../../assets/ic_back.svg";
import ButtonAdditem from "../Additem/ButtonAdditem";

function ItemDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const [item, setItem] = useState(null);
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [commentValue, setCommentValue] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleBack = () => {
    navigate("/items");
  };

  const submit = async (formData) => {
    try {
      const data = Object.fromEntries(formData.entries());
      await postProductComment(productId, data);
      alert("코멘트 등록 성공!");

      const updatedComments = await getProductComments(productId, 3);
      setComments(updatedComments);
    } catch (error) {
      console.error("등록 실패:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openMenuId &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenuId]);

  const handleMenuToggle = (commentId) => {
    setOpenMenuId(openMenuId === commentId ? null : commentId);
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
        <div>
          <div>
            <form id="add-comment-form" action={submit}>
              <label>문의하기</label>
              <textarea
                name="content"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.
"
              ></textarea>
            </form>
            <ButtonAdditem disabled={false} form="add-comment-form" />
          </div>
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
              <img
                src={ic_kebab}
                alt="kebab"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMenuToggle(comment.id);
                }}
              />
              {openMenuId === comment.id && (
                <div ref={menuRef}>
                  <div
                    onClick={() => {
                      alert("삭제 로직 실행");
                      setOpenMenuId(null);
                    }}
                  >
                    수정하기
                  </div>
                  <div
                    onClick={() => {
                      alert("삭제 로직 실행");
                      setOpenMenuId(null);
                    }}
                  >
                    삭제하기
                  </div>
                </div>
              )}
            </div>
          ))}
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
