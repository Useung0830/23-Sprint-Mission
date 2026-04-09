import { useState, useRef, useEffect } from "react";
import { formatRelativeTime } from "../../utils/formatData";
import ic_kebab from "../../assets/ic_kebab.svg";
import { patchComment, getProductComments } from "../../api/data"; // getProductComments 추가

function Comments({ productId, comments, setComments }) {
  // 상위에서 productId와 setComments를 받아온다고 가정
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const editInputRef = useRef(null);

  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const handleMenuToggle = (commentId) => {
    setOpenMenuId(openMenuId === commentId ? null : commentId);
  };

  const handleEditClick = (comment) => {
    setEditingId(comment.id);
    setEditContent(comment.content);
    setOpenMenuId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditContent("");
  };

  // --- Form 데이터를 처리하는 함수 ---
  const handleEditSubmit = async (e) => {
    e.preventDefault(); // 페이지 새로고침 방지

    // FormData 객체를 통해 데이터 가져오기
    const formData = new FormData(e.currentTarget);
    const updatedContent = formData.get("content");

    try {
      await patchComment(editingId, { content: updatedContent });
      alert(`수정 완료!`);
      setEditingId(null);

      // 목록 새로고침 (부모에게 받은 setComments가 있다면 호출)
      if (setComments && productId) {
        const updated = await getProductComments(productId, 3);
        setComments(updated);
      }
    } catch (error) {
      console.error("수정 실패:", error);
      alert("수정 중 오류가 발생했습니다.");
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();

      const length = editInputRef.current.value.length;
      editInputRef.current.setSelectionRange(length, length);
    }
  }, [editingId]);

  return (
    <div>
      {comments?.list?.map((comment) => (
        <div key={comment.id}>
          <div>
            {editingId === comment.id ? (
              <form onSubmit={handleEditSubmit}>
                <textarea
                  ref={editInputRef}
                  name="content"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div>
                  <button type="button" onClick={handleCancel}>
                    취소
                  </button>
                  <button type="submit">수정 완료</button>
                </div>
              </form>
            ) : (
              <p>{comment.content}</p>
            )}
          </div>

          <div>
            <img src={comment.writer.image} alt="writer" />
            <div>
              <span>{comment.writer.nickname}</span>
              <span>{formatRelativeTime(comment.createdAt)}</span>
            </div>
          </div>

          {editingId !== comment.id && (
            <>
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
                  <div onClick={() => handleEditClick(comment)}>수정하기</div>
                  <div onClick={() => alert("삭제 클릭")}>삭제하기</div>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comments;
