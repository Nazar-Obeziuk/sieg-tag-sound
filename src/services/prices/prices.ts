import axios from "../../utils/axios/axios";

export const getAllPrices = async () => {
  try {
    const { data } = await axios.get("/prices");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPriceById = async (id: string) => {
  try {
    const { data } = await axios.get(`/prices/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createPrice = async (data: JSON, token: string) => {
  try {
    const response = await axios.post("/prices", data, {
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

export const updatePrice = async (
  updatedPrice: JSON,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.patch(`/prices/${id}`, updatedPrice, {
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

export const deletePrice = async (id: string, token: string) => {
  try {
    const { data } = await axios.delete(`/prices/${id}`, {
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
