import React from 'react';
import { Card } from 'antd';
import styles from '../../../assets/styles/App.module.css';

const TotalSpecificationsCard: React.FC = () => {
  return (
    <Card variant="outlined" className={styles.statCard}>
      <div className={styles.title}>Total Specifications</div>
      <div className={styles.valueRow}>
        <span className={styles.value}>156</span>
        <span className={styles.percent}>
          <img
            src="https://static.motiffcontent.com/private/resource/image/197a0567e07f41e-27944c86-2929-4d7e-959e-31507b8ffd50.svg"
            alt="up"
            className={styles.percentIcon}
          />
          12%
        </span>
      </div>
    </Card>
  );
};

export default TotalSpecificationsCard;
