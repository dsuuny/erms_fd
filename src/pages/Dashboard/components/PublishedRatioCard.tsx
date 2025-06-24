import React from 'react';
import { Card, Typography } from 'antd';
import styles from '../../../assets/styles/App.module.css';

const { Title } = Typography;

const PublishedRatioCard: React.FC = () => (
  <Card variant="outlined" className={styles.statCard}>
    <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Published Ratio</Title>
    <div style={{ display: 'flex', alignItems: 'flex-start', minHeight: 120 }}>
      <img src="https://static.motiffcontent.com/private/resource/image/197a0567e082545-b192de1f-2953-4e5f-97ef-e79ea3fef474.svg" alt="pie" style={{ width: 120, height: 120 }} />
    </div>
    <span style={{ color: 'rgba(0,0,0,0.88)', textAlign: 'center', width: '100%', lineHeight: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>75% Published</span>
  </Card>
);

export default PublishedRatioCard;
