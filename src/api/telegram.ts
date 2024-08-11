import axios from "axios";

const baseURL =
  "https://api.telegram.org/bot7322476709:AAGmEvb_bHnLyj2USx43tJjkrHQgMljDN14/";

export const sendMessage = async (
  message: string,
  files: File[]
): Promise<void> => {
  const formData = new FormData();
  formData.append("chat_id", "-4202253447");
  formData.append("caption", message);

  files.forEach((file, index) => {
    formData.append("document", file);
  });

  try {
    const response = await axios.post(`${baseURL}sendDocument`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error("Не вдалося надіслати повідомлення");
    }
  } catch (error: any) {
    console.error("Помилка при надсиланні повідомлення:", error);
    await Promise.reject(
      error.message || "Щось пішло не так при відправленні даних..."
    );
  }
};
