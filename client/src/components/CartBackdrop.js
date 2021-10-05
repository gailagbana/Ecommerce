import "./index.css";

const CartBackdrop = ({ show, cart }) => {
  return show && <div className="cartbackdrop" onClick={cart}></div>;
};
export default CartBackdrop;
