import { HttpClient, json } from "@aurelia/fetch-client";
import { inject } from "aurelia";

@inject(HttpClient)
export class CrudApi {
  constructor(private http: HttpClient) {}

  public async getAllData(): Promise<any> {
    const req = await this.http.fetch(
      `https://backendcrud-production.up.railway.app/user/`
    );
    return req.json();
  }
  public async getUser(id): Promise<any> {
    const req = await this.http.fetch(
      `https://backendcrud-production.up.railway.app/user/${id}`
    );
    return req.json();
  }
  public async createUser(nombre, apellido, email, edad): Promise<any> {
    let body = {
      nombre: nombre,
      apellido: apellido,
      correo: email,
      edad: edad,
    };
    const req = await this.http.fetch(
      "https://backendcrud-production.up.railway.app/user/",
      { method: "post", body: json(body) }
    );
    return req.status == 400 ? "error" : req.json(); 
    
  }
  public async updateUser(nombre, apellido, email, edad, id): Promise<any> {
    
    const req = await this.http.fetch(
      `https://backendcrud-production.up.railway.app/user/${id}?nombre=${nombre}&apellido=${apellido}&correo=${email}&edad=${edad}`,
      { method: "put"}
    );
    return req.status == 400 ? "error" : req.json(); 
  }
  public async deleteUser(id): Promise<any> {
    const req = await this.http.fetch(
      `https://backendcrud-production.up.railway.app/user/${id}`,
      {
        method: "delete",
      }
    );
    return req.json();
  }

}
