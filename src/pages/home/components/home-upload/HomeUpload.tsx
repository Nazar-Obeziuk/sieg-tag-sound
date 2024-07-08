import React from "react";
import styles from "./HomeUpload.module.css";

const HomeUpload: React.FC = () => {
  return (
    <section className={styles.home__upload_section}>
      <div className="container">
        <div className={styles.home__upload_wrapper}></div>
      </div>
    </section>
  );
};

export default HomeUpload;
