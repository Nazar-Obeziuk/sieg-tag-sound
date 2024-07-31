import axios from "../../utils/axios/axios";

export const getAllPortfolios = async () => {
  try {
    const { data } = await axios.get("/portfolios");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPortfolioById = async (id: string) => {
  try {
    const { data } = await axios.get(`/portfolios/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createPortfolio = async (formData: FormData, token: string) => {
  try {
    const response = await axios.post("/portfolios", formData, {
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

export const updatePortfolio = async (
  updatedWorker: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.put(`/portfolios/${id}`, updatedWorker, {
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

export const deletePortfolio = async (id: number, token: string) => {
  try {
    const { data } = await axios.delete(`/portfolios/${id}`, {
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
