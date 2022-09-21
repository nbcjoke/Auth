import api from "../api/config";
import { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.get<IUser[]>("/users");
  }
}
