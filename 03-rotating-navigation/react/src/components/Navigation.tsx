import { MenuItem } from "../interfaces/IRotatingNavigation";
import "../styles/Navigation.css";

interface INavigationProps {
  menuItems: MenuItem[];
}

const Navigation = ({ menuItems }: INavigationProps) => {
  return (
    <nav>
      <ul>
        {menuItems.map((menuItem) => {
          return (
            <li>
              <i className={menuItem.className}>{menuItem.name}</i>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
