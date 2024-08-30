// import React, { useEffect, useState } from "react";
// import styles from "./CartUpload.module.css";
// import CartUploadService from "./components/cart-upload-service/CartUploadService";
// import CartUploadArea from "./components/cart-upload-area/CartUploadArea";
// import { useTranslation } from "react-i18next";
// import { IFullPrices } from "../../../services/full-prices/fullPrices.interface";
// import { getAllFullPrices } from "../../../services/full-prices/fullPrices";
// import { toast } from "react-toastify";
// import { sendMessage } from "../../../api/telegram";
// import { useNavigate } from "react-router-dom";

// const CartUpload: React.FC = () => {
//   const { t } = useTranslation();
//   const [blocks, setBlocks] = useState<
//     Array<{ file: File | null; description: string }>
//   >([]);
//   const [selectedService, setSelectedService] = useState<
//     "track" | "ep" | "album"
//   >("track");
//   const [prices, setPrices] = useState<IFullPrices[]>([]);
//   const [driveLink, setDriveLink] = useState<string>("");
//   const [isFormValid, setIsFormValid] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const handleBlocksChange = (
//     newBlocks: Array<{ file: File | null; description: string }>
//   ) => {
//     setBlocks(newBlocks);
//   };

//   const handleServiceChange = (service: "track" | "ep" | "album") => {
//     setSelectedService(service);
//     if (service === "track") {
//       setBlocks([{ file: null, description: "" }]);
//     } else {
//       setBlocks([]);
//     }
//   };

//   const handleDriveLinkChange = (link: string) => {
//     setDriveLink(link);
//   };

//   const getPrices = async () => {
//     try {
//       const response = await getAllFullPrices();
//       setPrices(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getPrices();
//   }, []);

//   const handleButtonClick = async () => {
//     const cart = localStorage.getItem("cart");

//     let checkout = 0;
//     let finalPrice;

//     const category = localStorage.getItem("category");
//     const isFast = localStorage.getItem("fast");

//     if (cart && isFast) {
//       const parsedCart = JSON.parse(cart);
//       const filteredPriceByCategory = prices.filter(
//         (price) => price.category === category
//       );
//       const filteredPriceByCount: any = filteredPriceByCategory.filter(
//         (price) => +price.count === blocks.length
//       );

//       const serviceLabel = parsedCart.service.label;

//       if (serviceLabel === "Mixing&Mastering") {
//         checkout = filteredPriceByCount[0].mixingAndMastering;
//       } else if (serviceLabel === "Mixing") {
//         checkout = filteredPriceByCount[0].mixing;
//       } else if (serviceLabel === "Mastering") {
//         checkout = filteredPriceByCount[0].mastering;
//       }

//       if (parsedCart.discount > 0) {
//         const discountAmount = checkout * (parsedCart.discount / 100);
//         finalPrice = checkout - discountAmount;

//         if (isFast === "yes") {
//           finalPrice += 50;
//         }
//       } else {
//         finalPrice = checkout;
//       }

//       localStorage.setItem("checkoutAmount", finalPrice.toString());

//       if (finalPrice > 0) {
//         let files: File[] = [];
//         let descriptions: string[] = [];

//         blocks.forEach((block) => {
//           if (block.file) files.push(block.file);
//           if (block.description) descriptions.push(block.description);
//         });

//         try {
// const descriptionText = descriptions
//   .map((desc, index) => `${index + 1}. ${desc}`)
//   .join("\n\n");
// const message = `
//   Прізвище та ім'я: ${parsedCart.firstName}
//   Телефон: ${parsedCart.phone}
//   Електронна пошта: ${parsedCart.email}
//   Сервіс: ${parsedCart.service.label}
//   Категорія: ${category}
//   Посилання на диск: ${driveLink ? driveLink : "Немає"}
//   Промокод: ${parsedCart.promocode}
//   Скидка: ${parsedCart.discount > 0 ? parsedCart.discount : "Нема"}
//   Галочка на облако: ${parsedCart.agreeToTerms === "on" ? "Да" : "Ні"}
//   Сумма замовлення: ${finalPrice}
//   Опис файлів:
//   ${descriptionText}
// `;
// await sendMessage(message, files);
// localStorage.removeItem("cart");
// localStorage.removeItem("category");
//           navigate("/");
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     }
//   };

//   return (
//     <section className={styles.cart__upload_section}>
//       <div className="container">
//         <div className={styles.cart__upload_wrapper}>
//           <CartUploadService onServiceChange={handleServiceChange} />
//           <CartUploadArea
//             onBlocksChange={handleBlocksChange}
//             onDriveLinkChange={handleDriveLinkChange}
//             selectedService={selectedService}
//             onValidityChange={setIsFormValid}
//           />
//           <div className={styles.cart__actions}>
//             <button
//               className={`${styles.cart__button} ${
//                 !isFormValid ? styles.error : ""
//               }`}
//               disabled={!isFormValid}
//               onClick={handleButtonClick}
//               type="button"
//             >
//               {t("cartUpload.cartUploadButtonText")}
//             </button>
//             {!isFormValid && (
//               <p className={styles.cart__fields_error}>
//                 {t("cartUpload.cartUploadFillFieldsText")}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CartUpload;

// import React, { useEffect, useState } from "react";
// import styles from "./CartUpload.module.css";
// import CartUploadService from "./components/cart-upload-service/CartUploadService";
// import CartUploadArea from "./components/cart-upload-area/CartUploadArea";
// import { useTranslation } from "react-i18next";
// import { IFullPrices } from "../../../services/full-prices/fullPrices.interface";
// import { getAllFullPrices } from "../../../services/full-prices/fullPrices";
// import { useNavigate } from "react-router-dom";

// const CartUpload: React.FC = () => {
//   const { t } = useTranslation();
//   const [blocks, setBlocks] = useState<
//     Array<{ file: File | null; description: string }>
//   >([]);
//   const [selectedService, setSelectedService] = useState<
//     "track" | "ep" | "album"
//   >("track");
//   const [prices, setPrices] = useState<IFullPrices[]>([]);
//   const [driveLink, setDriveLink] = useState<string>("");
//   const [isFormValid, setIsFormValid] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const handleBlocksChange = (
//     newBlocks: Array<{ file: File | null; description: string }>
//   ) => {
//     setBlocks(newBlocks);
//   };

//   const handleServiceChange = (service: "track" | "ep" | "album") => {
//     setSelectedService(service);
//     if (service === "track") {
//       setBlocks([{ file: null, description: "" }]);
//     } else {
//       setBlocks([]);
//     }
//   };

//   const handleDriveLinkChange = (link: string) => {
//     setDriveLink(link);
//   };

//   const getPrices = async () => {
//     try {
//       const response = await getAllFullPrices();
//       setPrices(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getPrices();
//   }, []);

//   const handleButtonClick = async () => {
//     const cart = localStorage.getItem("cart");

//     let checkout = 0;
//     let finalPrice: any;

//     const category = localStorage.getItem("category");
//     const isFast = localStorage.getItem("fast");

//     if (cart && isFast) {
//       const parsedCart = JSON.parse(cart);
//       const filteredPriceByCategory = prices.filter(
//         (price) => price.category === category
//       );
//       const filteredPriceByCount: any = filteredPriceByCategory.filter(
//         (price) => +price.count === blocks.length
//       );

//       const serviceLabel = parsedCart.service.label;

//       if (serviceLabel === "Mixing&Mastering") {
//         checkout = filteredPriceByCount[0].mixingAndMastering;
//       } else if (serviceLabel === "Mixing") {
//         checkout = filteredPriceByCount[0].mixing;
//       } else if (serviceLabel === "Mastering") {
//         checkout = filteredPriceByCount[0].mastering;
//       }

//       if (parsedCart.discount > 0) {
//         const discountAmount = checkout * (parsedCart.discount / 100);
//         finalPrice = checkout - discountAmount;

//         if (isFast === "yes") {
//           finalPrice += 50;
//         }
//       } else {
//         finalPrice = checkout;
//       }

//       localStorage.setItem("checkoutAmount", finalPrice.toString());

//       if (finalPrice > 0) {
//         const paymentData = {
//           merchantAccount: "185_233_117_23",
//           merchantDomainName: "185.233.117.23:3000",
//           orderReference: `ORD-${Date.now()}`,
//           orderDate: Math.floor(Date.now() / 1000),
//           amount: 1,
//           currency: "UAH",
//           productName: blocks.map((block) => block.description || "File"),
//           productCount: blocks.map((block) => (block.file ? 1 : 0)),
//           productPrice: blocks.map((block) => finalPrice / blocks.length),
//           clientFirstName: parsedCart.firstName.split(" ")[0],
//           clientLastName: parsedCart.firstName.split(" ")[1] || "",
//           clientEmail: parsedCart.email,
//           clientPhone: parsedCart.phone,
//           language: "UA",
//           cartData: JSON.stringify({
//             firstName: parsedCart.firstName,
//             phone: parsedCart.phone,
//             email: parsedCart.email,
//             service: parsedCart.service,
//             category: category,
//             driveLink: driveLink,
//             promocode: parsedCart.promocode,
//             discount: parsedCart.discount,
//             agreeToTerms: parsedCart.agreeToTerms,
//             descriptions: blocks.map((block) => block.description),
//           }),
//         };

//         try {
//           const response = await fetch(
//             "http://localhost:5555/payment/initiate-payment",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(paymentData),
//             }
//           );

//           const result = await response.json();

//           if (result.actionUrl && result.paymentData) {
//             const form = document.createElement("form");
//             form.method = "POST";
//             form.action = result.actionUrl;
//             form.acceptCharset = "utf-8";

//             for (const key in result.paymentData) {
//               if (result.paymentData.hasOwnProperty(key)) {
//                 const input = document.createElement("input");
//                 input.type = "hidden";
//                 input.name = key;
//                 input.value = result.paymentData[key];
//                 form.appendChild(input);
//               }
//             }

//             document.body.appendChild(form);
//             form.submit(); // Відправляємо форму для оплати
//           }
//         } catch (error) {
//           console.error("Помилка під час ініціації платежу:", error);
//         }
//       }
//     }
//   };

//   return (
//     <section className={styles.cart__upload_section}>
//       <div className="container">
//         <div className={styles.cart__upload_wrapper}>
//           <CartUploadService onServiceChange={handleServiceChange} />
//           <CartUploadArea
//             onBlocksChange={handleBlocksChange}
//             onDriveLinkChange={handleDriveLinkChange}
//             selectedService={selectedService}
//             onValidityChange={setIsFormValid}
//           />
//           <div className={styles.cart__actions}>
//             <button
//               className={`${styles.cart__button} ${
//                 !isFormValid ? styles.error : ""
//               }`}
//               disabled={!isFormValid}
//               onClick={handleButtonClick}
//               type="button"
//             >
//               {t("cartUpload.cartUploadButtonText")}
//             </button>
//             {!isFormValid && (
//               <p className={styles.cart__fields_error}>
//                 {t("cartUpload.cartUploadFillFieldsText")}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CartUpload;

import React, { useEffect, useState } from "react";
import styles from "./CartUpload.module.css";
import CartUploadService from "./components/cart-upload-service/CartUploadService";
import CartUploadArea from "./components/cart-upload-area/CartUploadArea";
import { useTranslation } from "react-i18next";
import { IFullPrices } from "../../../services/full-prices/fullPrices.interface";
import { getAllFullPrices } from "../../../services/full-prices/fullPrices";
import { useNavigate } from "react-router-dom";

const CartUpload: React.FC = () => {
  const { t } = useTranslation();
  const [blocks, setBlocks] = useState<
    Array<{ file: File | null; description: string }>
  >([]);
  const [selectedService, setSelectedService] = useState<
    "track" | "ep" | "album"
  >("track");
  const [prices, setPrices] = useState<IFullPrices[]>([]);
  const [driveLink, setDriveLink] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBlocksChange = (
    newBlocks: Array<{ file: File | null; description: string }>
  ) => {
    setBlocks(newBlocks);
  };

  const handleServiceChange = (service: "track" | "ep" | "album") => {
    setSelectedService(service);
    if (service === "track") {
      setBlocks([{ file: null, description: "" }]);
    } else {
      setBlocks([]);
    }
  };

  const handleDriveLinkChange = (link: string) => {
    setDriveLink(link);
  };

  const getPrices = async () => {
    try {
      const response = await getAllFullPrices();
      setPrices(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrices();
  }, []);

  const handleButtonClick = async () => {
    const cart = localStorage.getItem("cart");

    let checkout = 0;
    let finalPrice: any;

    const category = localStorage.getItem("category");
    const isFast = localStorage.getItem("fast");

    if (cart && isFast) {
      const parsedCart = JSON.parse(cart);
      const filteredPriceByCategory = prices.filter(
        (price) => price.category === category
      );
      const filteredPriceByCount: any = filteredPriceByCategory.filter(
        (price) => +price.count === blocks.length
      );

      const serviceLabel = parsedCart.service.label;

      if (serviceLabel === "Mixing&Mastering") {
        checkout = filteredPriceByCount[0].mixingAndMastering;
      } else if (serviceLabel === "Mixing") {
        checkout = filteredPriceByCount[0].mixing;
      } else if (serviceLabel === "Mastering") {
        checkout = filteredPriceByCount[0].mastering;
      }

      if (parsedCart.discount > 0) {
        const discountAmount = checkout * (parsedCart.discount / 100);
        finalPrice = checkout - discountAmount;

        if (isFast === "yes") {
          finalPrice += 50;
        }
      } else {
        finalPrice = checkout;
      }

      localStorage.setItem("checkoutAmount", finalPrice.toString());

      if (finalPrice > 0) {
        const paymentData = {
          merchantAccount: "185_233_117_23",
          merchantDomainName: "185.233.117.23:3000",
          orderReference: `ORD-${Date.now()}`,
          orderDate: Math.floor(Date.now() / 1000),
          amount: 1,
          currency: "UAH",
          productName: blocks.map((block) => block.description || "File"),
          productCount: blocks.map((block) => (block.file ? 1 : 0)),
          productPrice: blocks.map((block) => finalPrice / blocks.length),
          clientFirstName: parsedCart.firstName.split(" ")[0],
          clientLastName: parsedCart.firstName.split(" ")[1] || "",
          clientEmail: parsedCart.email,
          clientPhone: parsedCart.phone,
          language: "UA",
          cartData: JSON.stringify({
            firstName: parsedCart.firstName,
            phone: parsedCart.phone,
            email: parsedCart.email,
            service: parsedCart.service,
            category: category,
            driveLink: driveLink,
            promocode: parsedCart.promocode,
            discount: parsedCart.discount,
            agreeToTerms: parsedCart.agreeToTerms,
            descriptions: blocks.map((block) => block.description),
          }),
        };

        try {
          const response = await fetch(
            "http://localhost:5555/payment/initiate-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(paymentData),
            }
          );

          const result = await response.json();

          if (result.actionUrl && result.paymentData) {
            const form = document.createElement("form");
            form.method = "POST";
            form.action = result.actionUrl;
            form.acceptCharset = "utf-8";

            for (const key in result.paymentData) {
              if (result.paymentData.hasOwnProperty(key)) {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = result.paymentData[key];
                form.appendChild(input);
              }
            }

            document.body.appendChild(form);
            form.submit();
          }
        } catch (error) {
          console.error("Помилка під час ініціації платежу:", error);
        }
      }
    }
  };

  return (
    <section className={styles.cart__upload_section}>
      <div className="container">
        <div className={styles.cart__upload_wrapper}>
          <CartUploadService onServiceChange={handleServiceChange} />
          <CartUploadArea
            onBlocksChange={handleBlocksChange}
            onDriveLinkChange={handleDriveLinkChange}
            selectedService={selectedService}
            onValidityChange={setIsFormValid}
          />
          <div className={styles.cart__actions}>
            <button
              className={`${styles.cart__button} ${
                !isFormValid ? styles.error : ""
              }`}
              disabled={!isFormValid}
              onClick={handleButtonClick}
              type="button"
            >
              {t("cartUpload.cartUploadButtonText")}
            </button>
            {!isFormValid && (
              <p className={styles.cart__fields_error}>
                {t("cartUpload.cartUploadFillFieldsText")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartUpload;
