import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  type: any;
}

const Button: React.FC<Props> = ({ children, type }) => {
  return (
    <button className={styles.home__about_button} type={type}>
      {children}
    </button>
  );
};

export default Button;
