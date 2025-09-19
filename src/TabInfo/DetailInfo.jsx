export default function DetailInfo({ features, image }) {
  const safeFeatures = features ?? [];

  return (
    <div className="detail-info">
      {/* 특징 리스트 */}
      <h5 className="section-title">제품 특징</h5>
      <ul className="feature-list">
        {safeFeatures.length > 0 ? (
          safeFeatures.map((item, index) => (
            <li key={index} className="feature-item">
              {item}
            </li>
          ))
        ) : (
          <li className="feature-item">상세 정보가 준비 중입니다.</li>
        )}
      </ul>

      {/* 상세 설명 */}
      <div className="detail-section">
        <h6 className="section-subtitle">상세 설명</h6>
        <p>
          이 제품은 클래식한 디자인과 최신 기술이 조화를 이룬 아이템으로,
          편안한 착용감을 제공하면서도 스타일리시한 매력을 잃지 않습니다.
        </p>
        <p>
          고급 소재를 사용하여 내구성이 뛰어나며, 다양한 코디네이션에 잘
          어울려 일상은 물론 특별한 자리에서도 활용할 수 있습니다.
        </p>
      </div>

      {/* 상세 이미지 섹션 */}
      <div className="detail-images">
        <img src={image} alt="상세컷1" />
        <img src={image} alt="상세컷2" />
      </div>

      {/* 하이라이트 박스 */}
      <div className="highlight-box">
        <strong>주의사항:</strong> 화면 해상도 및 모니터 환경에 따라 실제 색상과
        다소 차이가 있을 수 있습니다. 세탁 시 가급적 손세탁을 권장합니다.
      </div>
    </div>
  );
}
