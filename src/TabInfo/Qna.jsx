import { useState } from "react";

export default function Qna() {
  const [qnaList, setQnaList] = useState([
    {
      id: 1,
      question: "이거 정사이즈인가요?",
      answer: "네, 보통 정사이즈로 구매하시면 됩니다.",
      author: "홍길동",
      date: new Date(),
    },
  ]);

  const [question, setQuestion] = useState("");
  const [author, setAuthor] = useState("");

  // 질문 등록
  const addQuestion = () => {
    if (question.trim() === "" || author.trim() === "") {
      alert("작성자와 질문을 모두 입력해주세요.");
      return;
    }

    if (!window.confirm("질문을 등록하시겠습니까?")) return;

    const newQna = {
      id: Date.now(),
      question,
      answer: null, // 답변은 추후 추가 가능
      author,
      date: new Date(),
    };

    setQnaList([...qnaList, newQna]);
    setQuestion("");
    setAuthor("");

    alert("질문이 등록되었습니다.");
  };

  // 질문 삭제
  const deleteQuestion = (id) => {
    if (!window.confirm("정말 이 질문을 삭제하시겠습니까?")) return;
    setQnaList(qnaList.filter((qna) => qna.id !== id));
    alert("질문이 삭제되었습니다.");
  };

  return (
    <div className="qna">
      <h5 className="section-title">상품 Q&A</h5>

      {/* 입력 폼 */}
      <div className="qna-form">
        <input
          type="text"
          placeholder="작성자 이름"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="질문을 입력해주세요."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={addQuestion}>등록</button>
      </div>

      {/* QnA 리스트 */}
      <ul className="qna-list">
        {qnaList.map((qna) => (
          <li key={qna.id} className="qna-item">
            <p className="qna-question">Q. {qna.question}</p>
            {qna.answer && <p className="qna-answer">A. {qna.answer}</p>}
            <div className="qna-meta">
              <strong>{qna.author}</strong> ·{" "}
              <small>{qna.date.toLocaleString()}</small>
            </div>
            <button onClick={() => deleteQuestion(qna.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
