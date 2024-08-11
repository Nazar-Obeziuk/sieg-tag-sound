import axios from "../../../utils/axios/axios";

export const checkRole = async (token: string) => {
  try {
    const data = await axios.post(
      "/auth/admin",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};
