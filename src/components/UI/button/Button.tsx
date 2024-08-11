import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  type: any;
  handleClick?: () => void;
}

const Button: React.FC<Props> = ({ children, type, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={styles.home__about_button}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
