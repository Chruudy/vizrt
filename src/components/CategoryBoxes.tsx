// src/components/CategoryBoxes.tsx
import React from 'react';
import styles from '@/styles/CategoryBoxes.module.css';

const CategoryBoxes = () => {
  return (
    <div className={styles.categoryBoxes}>
      <div className={styles.section}>
        <h2>Text 1</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic1.jpg" alt="Graphic 1" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic2.jpg" alt="Graphic 2" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic3.jpg" alt="Graphic 3" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic4.jpg" alt="Graphic 4" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic5.jpg" alt="Graphic 5" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic6.jpg" alt="Graphic 6" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic7.jpg" alt="Graphic 7" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic8.jpg" alt="Graphic 8" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic9.jpg" alt="Graphic 9" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic10.jpg" alt="Graphic 10" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic11.jpg" alt="Graphic 11" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/graphic12.jpg" alt="Graphic 12" />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Text 2</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution1.jpg" alt="Contribution 1" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution2.jpg" alt="Contribution 2" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution3.jpg" alt="Contribution 3" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution4.jpg" alt="Contribution 4" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution5.jpg" alt="Contribution 5" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution6.jpg" alt="Contribution 6" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution7.jpg" alt="Contribution 7" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution8.jpg" alt="Contribution 8" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution9.jpg" alt="Contribution 9" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution10.jpg" alt="Contribution 10" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution11.jpg" alt="Contribution 11" />
          </div>
          <div className={styles.gridItem}>
            <img src="/path/to/contribution12.jpg" alt="Contribution 12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBoxes;
