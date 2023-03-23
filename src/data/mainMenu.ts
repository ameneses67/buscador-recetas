interface IMenu {
  menu: string;
  path: string;
}

export const mainMenu: IMenu[] = [
  {
    menu: "Inicio",
    path: "/",
  },
  {
    menu: "Favoritos",
    path: "/favoritos/",
  },
];
