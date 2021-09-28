import { Link } from "react-router-dom";
import "./index.css";
//import category_image1 from "../../assets/category_1.jpeg";

const Category = ({ categoryId, title, imageUrl, description }) => {
  return (
    <Link to={`/category/${categoryId}`} className="category">
      <div className="category__info">
        <img src={imageUrl} alt={title} />

        <p className="info__name"> {title}</p>
        <p className="info__description">${description}</p>
      </div>
    </Link>
  );
};

export default Category;
