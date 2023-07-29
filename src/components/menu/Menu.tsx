import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((menuItem) => {
        return (
          <div className="item" key={menuItem.id}>
            <span className="title">{menuItem.title}</span>
            {menuItem.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className="listItem">
                  <img src={listItem.icon} alt="" />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
