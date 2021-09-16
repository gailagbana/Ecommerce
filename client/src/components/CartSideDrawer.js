import "./CartSideDrawer.css";
const CartSideDrawer = ({ show, cart }) => {
  const cartSideDrawerClass = ["cartsidedrawer"];

  if (show) {
    cartSideDrawerClass.push("show");
  }
  return (
    <div className={cartSideDrawerClass.join("  ")} onClick={cart}>
      <div className="title__cartsidedrawer">
        <span>Shopping Cart</span>
      </div>

      <div className="product__sidedrawer"> message or product</div>

      <button>Check Out</button>
    </div>
  );
};

export default CartSideDrawer;
