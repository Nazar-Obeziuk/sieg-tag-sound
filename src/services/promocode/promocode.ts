import axios from "../../utils/axios/axios";

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

export const createPromocode = async (formData: FormData, token: string) => {
  try {
    const response = await axios.post("/promocodes", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updatePromocode = async (
  updatedWorker: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.put(`/promocodes/${id}`, updatedWorker, {
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

export const deletePromocode = async (id: number, token: string) => {
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
