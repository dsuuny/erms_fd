import React from 'react';
import { Card, Typography, Button } from 'antd';
import styles from '../../../assets/styles/App.module.css';

const { Title } = Typography;

const QuickActionsCard: React.FC = () => (
  <Card variant="outlined" className={styles.quickCard}>
    <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Quick Actions</Title>
    <Button type="primary" block style={{ borderRadius: 6, marginBottom: 8, background: '#1677FF', boxShadow: '0px 2px 0px 0px rgba(5, 145, 255, 0.10)', padding: '5px 67.83px', fontWeight: 500, fontSize: 14, lineHeight: '22px' }}>Create New Specification</Button>
    <Button block style={{ borderRadius: 6, background: '#fff', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.02)', border: '1px solid #D9D9D9', marginBottom: 0, padding: '5px 68.33px', fontWeight: 500, fontSize: 14, lineHeight: '22px' }}>Review Pending Changes</Button>
  </Card>
);

export default QuickActionsCard;
