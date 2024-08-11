import React from "react";
import styles from "./Loader.module.css";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <TailSpin color="var(--primary)" />
    </div>
  );
};

export default Loader;
