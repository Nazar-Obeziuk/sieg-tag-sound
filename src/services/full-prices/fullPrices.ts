import axios from "../../utils/axios/axios";

export const getAllFullPrices = async () => {
  try {
    const { data } = await axios.get("/full-prices");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFullPriceById = async (id: string) => {
  try {
    const { data } = await axios.get(`/full-prices/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createFullPrice = async (data: any, token: string) => {
  try {
    const response = await axios.post("/full-prices", data, {
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

export const updateFullPrice = async (
  updatedFullPrice: any,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.patch(`/full-prices/${id}`, updatedFullPrice, {
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

export const deleteFullPrice = async (id: string, token: string) => {
  try {
    const { data } = await axios.delete(`/full-prices/${id}`, {
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
