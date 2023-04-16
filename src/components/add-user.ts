import { CrudApi } from "../services/crud-api";
import { IRouter, IRouteableComponent } from "@aurelia/router";

export class AddUser implements IRouteableComponent {
  private data;
  private nombre;
  private apellido;
  private email;
  private edad;

  constructor(private api: CrudApi, @IRouter private router: IRouter) {}

  async createUser() {
    this.data = await this.api.createUser(
      this.nombre,
      this.apellido,
      this.email,
      this.edad
    );
    this.HomePage();
  }
  async HomePage() {
    await this.router.load("/");
  }
}
