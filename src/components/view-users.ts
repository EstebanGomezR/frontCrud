import { CrudApi } from "../services/crud-api";
import { IRouter, IRouteableComponent } from "@aurelia/router";

export class ViewUsers implements IRouteableComponent {
  private data;
  private delete;
  constructor(private api: CrudApi, @IRouter private router: IRouter) {
    this.success();
  }

  async success() {
    this.data = await this.api.getAllData();
  }
  async deleteUser(id) {
    this.delete = await this.api.deleteUser(id);
    this.success()
  }
  async RegistroUserPage() {
    await this.router.load("/add-user");
  }
  async EditPage(id) {
    await this.router.load(`/user/${id}`);
  }
}
