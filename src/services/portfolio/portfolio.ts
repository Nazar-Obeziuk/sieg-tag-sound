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

export const getAllPortfoliosByLang = async (lang: string) => {
  try {
    const { data } = await axios.get(`/portfolios/lang/${lang}`);
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

export const getPortfolioByIdLang = async (
  langID: string,
  portfolio_language: string
) => {
  try {
    const { data } = await axios.get(
      `/portfolios/${langID}/${portfolio_language}`
    );
    return data;
  } catch (error) {
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

export const createPortfolioLang = async (
  formData: FormData,
  token: string,
  langID: string
) => {
  try {
    const response = await axios.post(`/portfolios/${langID}`, formData, {
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
  updatedPortfolio: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.patch(`/portfolios/${id}`, updatedPortfolio, {
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

export const deletePortfolio = async (id: string, token: string) => {
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
