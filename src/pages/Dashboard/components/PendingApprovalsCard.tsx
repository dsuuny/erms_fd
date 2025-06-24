import React from 'react';
import { Card, Typography } from 'antd';
import styles from '../../../assets/styles/App.module.css';

const { Title } = Typography;

const PendingApprovalsCard: React.FC = () => (
  <Card variant="outlined" className={styles.statCard}>
    <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Pending Approvals</Title>
    <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
      <span style={{ color: '#FF4D4F', fontWeight: 600, fontSize: 30, lineHeight: '36px' }}>8</span>
      <span style={{ color: '#8C8C8C', fontSize: 14, lineHeight: '22px', marginTop: 7 }}>requests</span>
    </div>
  </Card>
);

export default PendingApprovalsCard;
