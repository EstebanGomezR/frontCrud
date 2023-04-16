import { CrudApi } from "../services/crud-api";
import { IRouter, IRouteableComponent } from "@aurelia/router";

export class AddUser implements IRouteableComponent {
  private data;
  private nombre;
  private apellido;
  private email;
  private edad;
  private error;

  constructor(private api: CrudApi, @IRouter private router: IRouter) {
    this.error = false;
  }

  async createUser() {
    this.data = await this.api.createUser(
      this.nombre,
      this.apellido,
      this.email,
      this.edad
    );
    this.data == "error" ? (this.error = true) : this.HomePage();
  }
  async HomePage() {
    await this.router.load("/");
  }
  closeAlert() {
    this.error = false;
  }
}
