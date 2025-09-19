import DetailInfo from "../TabInfo/DetailInfo";
import SizeGuide from "../TabInfo/SizeGuide";
import Shipping from "../TabInfo/Shipping";
import Reviews from "../TabInfo/Reviews";
import Qna from "../TabInfo/Qna";
import "./TabContent.css";

function TabContent({ tabState, features, image }) {
  return (
    <div className="tab-content">
      <div className="tab-panel">
        {tabState === 0 && <DetailInfo features={features} image={image} />}
        {tabState === 1 && <SizeGuide />}
        {tabState === 2 && <Shipping />}
        {tabState === 3 && <Reviews />}
        {tabState === 4 && <Qna />}
      </div>
    </div>
  );
}

export default TabContent;
