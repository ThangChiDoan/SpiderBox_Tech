import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex space-x-4 ">
      <Link to="/react-table" className="text-base font-medium cursor-pointer">
        React table
      </Link>
    </div>
  );
};

export default Menu;
