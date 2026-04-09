import { useState, useRef, useEffect } from "react";
import { formatRelativeTime } from "../../utils/formatData";
import ic_kebab from "../../assets/ic_kebab.svg";

function Comments({ comments }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const handleMenuToggle = (commentId) => {
    setOpenMenuId(openMenuId === commentId ? null : commentId);
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

  return (
    <div>
      {comments?.list?.map((comment) => (
        <div key={comment.id}>
          <div>
            <p>{comment.content}</p>
            <div>
              <img src={comment.writer.image} alt="writer" />
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
              <div onClick={() => alert("수정 클릭")}>수정하기</div>
              <div onClick={() => alert("삭제 클릭")}>삭제하기</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comments;
