import React, { ReactNode } from "react";
import styles from "./Card.module.css";

interface Props {
  children: ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className={styles.card__block}>{children}</div>;
};

export default Card;
