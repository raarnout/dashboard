"use client";

import React from "react";
import styles from "./Hamburger.module.css";

const Hamburger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className={styles.wrapper}
      onClick={onClick}
      aria-label="Toggle menu"
      role="button"
      tabIndex={0}
    >
      <span className={styles.hamburger}></span>
    </button>
  );
};

export default Hamburger;
