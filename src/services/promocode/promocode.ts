import axios from "../../utils/axios/axios";
import { IPromocode } from "./promocode.interface";

export const getAllPromocodes = async () => {
  try {
    const { data } = await axios.get("/promocodes");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPromocodeById = async (id: string) => {
  try {
    const { data } = await axios.get(`/promocodes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createPromocode = async (promocode: any, token: string) => {
  try {
    const response = await axios.post("/promocodes", promocode, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updatePromocode = async (
  updatedPromocode: any,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.patch(`/promocodes/${id}`, updatedPromocode, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deletePromocode = async (id: string, token: string) => {
  try {
    const { data } = await axios.delete(`/promocodes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
