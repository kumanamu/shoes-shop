// src/about/index.jsx
import "./about.css";

function About({ shoes }) {
  return (
    <div className="about">
      <img
        src={`https://zzzmini.github.io/images/shoes${shoes.id + 1}.jpg`}
        alt={shoes.title}
        width="50%"
      />
      <h2>{shoes.title}</h2>
      <p>{shoes.content}</p>
      <p>{shoes.price.toLocaleString()}원</p>
    </div>
  );
}

export default About;
