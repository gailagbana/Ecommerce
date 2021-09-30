import { useHistory } from "react-router-dom";
import "../index.css";

const Logout = () => {
  const history = useHistory();
  history.push("/");
  return <div></div>;
};

export default Logout;
