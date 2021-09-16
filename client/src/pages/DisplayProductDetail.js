import "./DisplayProductDetail.css";
import inventory_image1 from "../Assets/inventory_1.jpeg";

const DisplayProductDetail = () => {
  return (
    <div className="productdetail">
      <div className="productdetail__left">
        <div className="left__image">
          <img src={inventory_image1} alt="A black shirt" />
        </div>

        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price : $200.99</p>
          <p>
            Description: dnsjncd fsdj fjdsks djkwledewkld fwlkejdwelkd dwekljd
            lwjkd wjlkdwdjlwkd wljdkjwke dewjkldw
          </p>
        </div>
      </div>

      <div className="productdetail__right">
        <div className="right__info">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>Pre Order</span>
          </p>
          <p>
            Quantity
            <select>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayProductDetail;
