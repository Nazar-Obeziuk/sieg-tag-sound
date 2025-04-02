import React, { useState, useEffect } from "react";
import styles from "./FormPopup.module.css";
import { useTranslation } from "react-i18next";
import { sendMessage } from "../../api/telegram";

const FormPopup: React.FC = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [showFormSuccessResult, setShowFormSuccessResult] =
    useState<boolean>(false);
  const [showFormErrorResult, setShowFormErrorResult] =
    useState<boolean>(false);

  const handleShowForm = (state: boolean, resultType: null | string = null) => {
    setShowForm(() => state);
    if (resultType !== null) {
      resultType === "success"
        ? handleShowFormSuccessResult(true)
        : handleShowFormErrorResult(true);
    }
  };

  const handleShowFormSuccessResult = (state: boolean) => {
    setShowFormSuccessResult(() => state);
  };

  const handleShowFormErrorResult = (state: boolean) => {
    setShowFormErrorResult(() => state);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      return;
    }

    const message = `📩 ${t("popup.popupFormTelegramTextTitle")}:\n\n👤 ${t(
      "popup.popupFormTelegramTextName"
    )}: ${formData.name}\n📧 Email: ${formData.email}`;

    try {
      setIsSending(true);
      await sendMessage(message);
      setFormData({ name: "", email: "" });
      handleShowForm(false, "success");
    } catch (error) {
      handleShowForm(false, "error");
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShowForm(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showForm && (
        <div className={styles.popup__form_popup}>
          <div className={styles.popup__form_wrapper}>
            <button
              className={styles.popup__form_close}
              onClick={() => handleShowForm(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g id="surface1">
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "evenodd",
                      fill: "rgb(5.882353%,9.019608%,16.078432%)",
                      fillOpacity: 1,
                    }}
                    d="M 5.292969 5.292969 C 5.683594 4.902344 6.316406 4.902344 6.707031 5.292969 L 12 10.585938 L 17.292969 5.292969 C 17.683594 4.902344 18.316406 4.902344 18.707031 5.292969 C 19.097656 5.683594 19.097656 6.316406 18.707031 6.707031 L 13.414062 12 L 18.707031 17.292969 C 19.097656 17.683594 19.097656 18.316406 18.707031 18.707031 C 18.316406 19.097656 17.683594 19.097656 17.292969 18.707031 L 12 13.414062 L 6.707031 18.707031 C 6.316406 19.097656 5.683594 19.097656 5.292969 18.707031 C 4.902344 18.316406 4.902344 17.683594 5.292969 17.292969 L 10.585938 12 L 5.292969 6.707031 C 4.902344 6.316406 4.902344 5.683594 5.292969 5.292969 Z M 5.292969 5.292969 "
                  />
                </g>
              </svg>
            </button>
            <div className={styles.popup__wrapper_info}>
              <h3>{t("popup.popupFormTitle")}</h3>
            </div>
            <form
              className={styles.popup__wrapper_item}
              onSubmit={handleSubmit}
            >
              <div className={styles.popup__item_fields}>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("popup.popupFormName")}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSending}
                    required
                  />
                </label>
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("popup.popupFormEmail")}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSending}
                    required
                  />
                </label>
              </div>
              <div className={styles.popup__item_actions}>
                <input type="submit" value={t("popup.popupFormSend")} />
              </div>
            </form>
          </div>
        </div>
      )}
      {!showForm && showFormSuccessResult && (
        <div className={styles.popup__form_popup}>
          <div className={styles.popup__form_wrapper}>
            <button
              className={styles.popup__form_close}
              onClick={() => handleShowFormSuccessResult(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g id="surface1">
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "evenodd",
                      fill: "rgb(5.882353%,9.019608%,16.078432%)",
                      fillOpacity: 1,
                    }}
                    d="M 5.292969 5.292969 C 5.683594 4.902344 6.316406 4.902344 6.707031 5.292969 L 12 10.585938 L 17.292969 5.292969 C 17.683594 4.902344 18.316406 4.902344 18.707031 5.292969 C 19.097656 5.683594 19.097656 6.316406 18.707031 6.707031 L 13.414062 12 L 18.707031 17.292969 C 19.097656 17.683594 19.097656 18.316406 18.707031 18.707031 C 18.316406 19.097656 17.683594 19.097656 17.292969 18.707031 L 12 13.414062 L 6.707031 18.707031 C 6.316406 19.097656 5.683594 19.097656 5.292969 18.707031 C 4.902344 18.316406 4.902344 17.683594 5.292969 17.292969 L 10.585938 12 L 5.292969 6.707031 C 4.902344 6.316406 4.902344 5.683594 5.292969 5.292969 Z M 5.292969 5.292969 "
                  />
                </g>
              </svg>
            </button>
            <div className={styles.popup__wrapper_info}>
              <h3 style={{ color: "#07b107" }}>
                {t("popup.popupFormResultSuccessText")}
              </h3>
            </div>
          </div>
        </div>
      )}
      {!showForm && showFormErrorResult && (
        <div className={styles.popup__form_popup}>
          <div className={styles.popup__form_wrapper}>
            <button
              className={styles.popup__form_close}
              onClick={() => handleShowFormErrorResult(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g id="surface1">
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "evenodd",
                      fill: "rgb(5.882353%,9.019608%,16.078432%)",
                      fillOpacity: 1,
                    }}
                    d="M 5.292969 5.292969 C 5.683594 4.902344 6.316406 4.902344 6.707031 5.292969 L 12 10.585938 L 17.292969 5.292969 C 17.683594 4.902344 18.316406 4.902344 18.707031 5.292969 C 19.097656 5.683594 19.097656 6.316406 18.707031 6.707031 L 13.414062 12 L 18.707031 17.292969 C 19.097656 17.683594 19.097656 18.316406 18.707031 18.707031 C 18.316406 19.097656 17.683594 19.097656 17.292969 18.707031 L 12 13.414062 L 6.707031 18.707031 C 6.316406 19.097656 5.683594 19.097656 5.292969 18.707031 C 4.902344 18.316406 4.902344 17.683594 5.292969 17.292969 L 10.585938 12 L 5.292969 6.707031 C 4.902344 6.316406 4.902344 5.683594 5.292969 5.292969 Z M 5.292969 5.292969 "
                  />
                </g>
              </svg>
            </button>
            <div className={styles.popup__wrapper_info}>
              <h3 style={{ color: "#d60000" }}>
                {t("popup.popupFormResultErrorText")}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormPopup;
