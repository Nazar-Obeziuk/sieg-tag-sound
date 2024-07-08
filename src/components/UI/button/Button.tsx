import React from "react";
import styles from "./Button.module.css";

interface Props {
  buttonText: string;
  type: any;
}

const Button: React.FC<Props> = ({ buttonText, type }) => {
  return (
    <button className={styles.home__about_button} type={type}>
      {buttonText}
    </button>
  );
};

export default Button;
