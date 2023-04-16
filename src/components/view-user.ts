import { CrudApi } from "../services/crud-api";
import { IRouter, IRouteableComponent, Parameters } from "@aurelia/router";

export class ViewUser implements IRouteableComponent {
  private id;
  private data;
  private nombre;
  private apellido;
  private email;
  private edad;
  private error;

  constructor(private api: CrudApi, @IRouter private router: IRouter) {
    this.error = false;
  }

  async canLoad(params: Parameters) {
    this.id = params.id;
    this.searhcUser(this.id);
    return true;
  }
  async searhcUser(id) {
    this.data = await this.api.getUser(id);
    console.log(this.data.nombre);
    this.nombre = this.data.nombre;
    this.apellido = this.data.apellido;
    this.email = this.data.correo;
    this.edad = this.data.edad;
  }
  async updateUser() {
    this.data = await this.api.updateUser(
      this.nombre,
      this.apellido,
      this.email,
      this.edad,
      this.id
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
