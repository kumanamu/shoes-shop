// src/Detail/index.jsx
import { useParams } from "react-router-dom";
import About from "../about";
import data from "../data/data";

function Detail() {
  const { id } = useParams();
  const shoes = data.find((item) => item.id === Number(id));

  if (!shoes) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div>
      <About shoes={shoes} />
    </div>
  );
}

export default Detail;
