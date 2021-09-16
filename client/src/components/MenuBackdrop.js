import "./MenuBackdrop.css";

const MenuBackdrop = ({ show, click }) => {
  return show && <div className="menubackdrop" onClick={click}></div>;
};
export default MenuBackdrop;
