import { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  // 평균 별점 계산
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !content || rating === 0) {
      alert("작성자, 내용, 별점을 모두 입력해주세요!");
      return;
    }

    if (!window.confirm("리뷰를 등록하시겠습니까?")) return;

    const newReview = {
      id: Date.now(),
      author,
      content,
      rating,
      date: new Date().toLocaleString(),
    };

    setReviews([newReview, ...reviews]);
    setAuthor("");
    setContent("");
    setRating(0);

    alert("리뷰가 등록되었습니다!");
  };

  const handleDelete = (id) => {
    if (!window.confirm("리뷰를 삭제하시겠습니까?")) return;
    setReviews(reviews.filter((r) => r.id !== id));
    alert("리뷰가 삭제되었습니다.");
  };

  // ⭐ 별점 입력 (0.5 단위 지원)
  const renderStarsInput = () => (
    <div className="star-input">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`star ${
            rating >= i ? "active" : rating >= i - 0.5 ? "half-active" : ""
          }`}
          onClick={(e) => {
            const { left, width } = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - left;
            if (clickX < width / 2) {
              setRating(i - 0.5); // 반쪽 클릭
            } else {
              setRating(i); // 전체 클릭
            }
          }}
        >
          ★
        </span>
      ))}
      <span className="rating-value">({rating})</span>
    </div>
  );

  // ⭐ 리뷰 출력용 별점
  const renderStars = (value) => {
    const fullStars = Math.floor(value);
    const halfStar = value % 1 !== 0;
    const emptyStars = 5 - Math.ceil(value);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "⯪"}
        {"☆".repeat(emptyStars)}
        <span className="review-score"> ({value})</span>
      </>
    );
  };

  return (
    <div className="reviews">
      <h5 className="section-title">리뷰 ({reviews.length})</h5>

      {/* 평균 별점 */}
      <div className="average-rating">⭐ {averageRating} / 5.0</div>

      {/* 리뷰 작성 폼 */}
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="작성자 이름"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="리뷰 내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {renderStarsInput()}
        <button type="submit">리뷰 등록</button>
      </form>

      {/* 리뷰 리스트 */}
      <ul className="review-list">
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <li key={r.id} className="review-item">
              <div className="review-header">
                <strong className="review-author">{r.author}</strong>
                <span className="review-date">{r.date}</span>
              </div>
              <div className="review-rating">{renderStars(r.rating)}</div>
              <p className="review-content">{r.content}</p>
              <button
                className="delete-btn"
                onClick={() => handleDelete(r.id)}
              >
                삭제
              </button>
            </li>
          ))
        ) : (
          <li>아직 등록된 리뷰가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}
