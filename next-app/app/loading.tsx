import React from 'react';
import styles from "./loading.module.css";
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="h-[calc(100vh-6rem)]">
      <div className={styles.loaderContainer}>
        <div className={styles.loaderLine}></div>
        <FaSpinner className={styles.spinner} />
      </div>
    </div>
  );
};

export default Loading;
