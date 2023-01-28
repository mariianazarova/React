import { NavLink } from "react-router-dom";

const ItemMenu = ({ children }) => {
  return (
    <>
      <NavLink
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#f7c223" : "#ffffff",
        })}
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to={children === "Home" ? "/" : children.toLowerCase()}
      >
        {children.toLowerCase()}
      </NavLink>
    </>
  );
};
export default ItemMenu;
