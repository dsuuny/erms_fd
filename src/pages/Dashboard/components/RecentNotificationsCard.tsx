import React from 'react';
import { Card, Typography } from 'antd';
import styles from '../../../assets/styles/App.module.css';

const { Title } = Typography;

const notifications = [
  'New specification "Revenue Analysis" created',
  'Changes requested for "Customer Analytics"',
  '"Sales Transformations" approved by John Doe',
  'New version of "Inventory Pipeline" published',
];

const RecentNotificationsCard: React.FC = () => (
  <Card variant="outlined" className={styles.notifyCard}>
    <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Recent Notifications</Title>
    <div style={{ marginTop: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
      {notifications.map((item, idx) => (
        <div key={idx} className={styles.notifyMsg}>{item}</div>
      ))}
    </div>
  </Card>
);

export default RecentNotificationsCard;
