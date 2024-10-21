import React from 'react';
import styles from "./loading.module.css";
import { ImSpinner2 } from 'react-icons/im';

const Loading = () => {
  return (
    <div className="h-[calc(100vh-6rem)]">
      <div className={styles.loaderContainer}>
        <div className={styles.loaderLine}></div>
        <ImSpinner2 size={18} className={styles.spinner} />
      </div>
    </div>
  );
};

export default Loading;
