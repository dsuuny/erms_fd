import React from 'react';
import styles from './GrayTitleCard.module.css';

interface GrayTitleCardProps {
  title: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const GrayTitleCard: React.FC<GrayTitleCardProps> = ({ title, icon, children, style }) => {
  return (
    <div className={styles.grayCard} style={style}>
      <div className={styles.grayCardTitleBar}>
        {icon && <span>{icon}</span>}
        {title}
      </div>
      <div className={styles.grayCardBody}>{children}</div>
    </div>
  );
};

export default GrayTitleCard;
