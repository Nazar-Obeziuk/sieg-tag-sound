import axios from "../../utils/axios/axios";

export const getAllBlogs = async () => {
  try {
    const { data } = await axios.get("/blogs");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllBlogsByLang = async (lang: string) => {
  try {
    const { data } = await axios.get(`/blogs/lang/${lang}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBlogById = async (id: string) => {
  try {
    const { data } = await axios.get(`/blogs/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBlogByIdLang = async (
  langID: string,
  blog_language: string
) => {
  try {
    const { data } = await axios.get(`/blogs/${langID}/${blog_language}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const createBlog = async (formData: FormData, token: string) => {
  try {
    const response = await axios.post("/blogs", formData, {
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

export const createBlogLang = async (
  formData: FormData,
  token: string,
  langID: string
) => {
  try {
    const response = await axios.post(`/blogs/${langID}`, formData, {
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

export const updateBlog = async (
  updatedBlog: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.patch(`/blogs/${id}`, updatedBlog, {
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

export const deleteBlog = async (id: string, token: string) => {
  try {
    const { data } = await axios.delete(`/blogs/${id}`, {
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
