export interface IRotatingNavigation {
  menuItems: MenuItem[];
  title: string;
  author: string;
  sections: Section[];
}

export interface MenuItem {
  name: string;
  className: string;
}

export interface Section {
  text: string;
  image?: string;
  alt?: string;
}
