import axios from "../../../utils/axios/axios";
import { IUser } from "./login.interface";

export const loginUser = async (data: IUser) => {
  try {
    const res: any = await axios.post("/auth/login", data);
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};
