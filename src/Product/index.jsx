// src/Product/index.jsx
import { Link } from "react-router-dom";

function Product({ shoes }) {
  return (
    <div>
      <Link
        to={`/detail/${shoes.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={`https://zzzmini.github.io/images/shoes${shoes.id + 1}.jpg`}
          alt={shoes.title}
          width="80%"
        />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
        <p>{shoes.price.toLocaleString()}원</p>
      </Link>
    </div>
  );
}

export default Product;
