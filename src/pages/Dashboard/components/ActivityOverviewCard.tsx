import React from 'react';
import { Card, Typography } from 'antd';
import styles from '../../../assets/styles/App.module.css';

const { Title } = Typography;

const ActivityOverviewCard: React.FC = () => (
  <Card variant="outlined" className={styles.activityCard}>
    <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Activity Overview</Title>
    <img src="https://static.motiffcontent.com/private/resource/image/197a0567e08d3fa-8b31692d-7201-4c67-a577-6ddfdc05bffd.svg" alt="line chart" style={{ width: '100%', maxWidth: 1000, height: 300 }} />
  </Card>
);

export default ActivityOverviewCard;
