import "../index.css";

//import { Category } from "../../components/Category";

const CategoryPage = () => {
  return (
    <div className="categorypage">
      <div className="categorypage__heading">
        <div className="categorypage__filter">
          <div>
            FILTER
            <i class="fas fa-chevron-down"></i>
          </div>

          <div>
            SORT BY
            <i class="fas fa-chevron-down"></i>
          </div>

          <div></div>
        </div>
      </div>
      <div className="display__inventories"></div>m
    </div>
  );
};

export default CategoryPage;
