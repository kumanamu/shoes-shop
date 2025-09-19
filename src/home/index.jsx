import { Container, Row, Col, Button } from "react-bootstrap";
import Product from "../Product";
import axios from "axios";
import { useState } from "react";
import bg_png from "../assets/images/bg.png";

function Home({ product, setProduct }) {
  let [dataLoadingCount, setDataLoadingCount] = useState(0);
  let [loadingState, setLoadingState] = useState(false);

  const loadData = (url) => {
    setLoadingState(true);

    axios
      .get(url)
      .then((result) => {
        const offset = product.length;

        const newData = result.data.map((item, index) => {
          const newId = offset + index; // 고유 id 부여
          return {
            ...item,
            id: newId,
            features: item.features ?? [
              "추가 데이터 - 기본 특징 1",
              "추가 데이터 - 기본 특징 2",
            ],
            // id 기반으로 고정된 이미지 매칭
            image: item.image ?? `/images/shoes${newId + 1}.jpg`,
          };
        });

        setProduct([...product, ...newData]);
      })
      .catch((error) => console.error("가져오기 실패", error))
      .finally(() => setLoadingState(false));
  };

  return (
    <div>
      {/* 메인 배경 */}
      <div
        className="main-bg"
        style={{ backgroundImage: `url('${bg_png}')` }}
      />

      {/* 상품 진열 */}
      <Container>
        <Row xs={3}>
          {product.map((shoes) => (
            <Col key={shoes.id} className="text-center">
              <Product shoes={shoes} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* 로딩 메시지 */}
      <div className="text-center my-3">
        {loadingState && <div>Loading .... Please wait!</div>}
      </div>

      {/* 데이터 불러오기 버튼 */}
      <div className="d-flex justify-content-center align-items-center">
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            let getUrl = "";
            if (dataLoadingCount === 0) {
              getUrl = "https://zzzmini.github.io/js/react_data_01.json";
              setDataLoadingCount(1);
            } else if (dataLoadingCount === 1) {
              getUrl = "https://zzzmini.github.io/js/react_data_02.json";
              setDataLoadingCount(2);
            } else {
              alert("더 이상 데이터가 존재하지 않아요!");
              return;
            }
            loadData(getUrl);
          }}
        >
          데이터 가져오기
        </Button>
      </div>
    </div>
  );
}

export default Home;
