import { Link, useHistory } from "react-router-dom";

import "./HomePage.css";
import product1 from "../Assets/product_1.jpeg";
import product2 from "../Assets/product_2.jpeg";
import homepage_video from "../Assets/homepage_video.mp4";

const HomePage = () => {
  let history = useHistory();

  return (
    <div className="homepage">
      <div>
        <video
          className="homepage_video"
          loop
          autoPlay
          muted
          style={{ position: "relative" }}
        >
          <source src={homepage_video} type="video/mp4" />
        </video>
      </div>

      <ul className="homepage__products">
        <div
          style={{
            backgroundImage: `url(${product1})`,
            backgroundSize: "cover",
            height: "90vh",
            width: "49.2%",
          }}
          onClick={() => history.push("/category/women")}
        >
          <li>Women's Outfits</li>
          <Link to="/category/women">
            <span>Discover</span>
          </Link>
        </div>

        <div
          style={{
            backgroundImage: `url(${product2})`,
            backgroundSize: "cover",
            height: "90vh",
            width: "49.2%",
          }}
          onClick={() => history.push("/category/men")}
        >
          <li>Men's Outfits</li>
          <Link to="/category/men">
            <span>Discover</span>
          </Link>
        </div>
      </ul>

      <ul className="homepage__collections ">Collections</ul>
    </div>
  );
};

export default HomePage;
