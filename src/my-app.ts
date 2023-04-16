import { AddUser } from "./components/add-user";
import { ViewUsers } from "./components/view-users";
import { ViewUser } from "./components/view-user";

export class MyApp {
  static routes = [
    {
      path: "",
      component: ViewUsers,
      title: "Home",
    },
    {
      path: "add-user",
      component: AddUser,
      title: "Agregar Usuarios",
    },
    {
      path: "user",
      component: ViewUsers,
      title: "Ver Usuarios",
    },
    {
      path: "user/:id",
      component: ViewUser,
      title: "Ver Usuarios",
    },
  ];

  
}
