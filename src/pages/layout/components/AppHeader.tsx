import React from 'react';
import { Layout, Badge, Avatar, Typography } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import styles from '../../../assets/styles/App.module.css';

const { Header } = Layout;
const { Text } = Typography;

const AppHeader: React.FC = () => (
  <Header className={styles.header}>
    <div className={styles.headerLeft}>
      <span className={styles.headerTitle}>ERMS</span>
    </div>
    <div className={styles.headerRight}>
      <Badge count={0} size="small">
        <BellOutlined style={{ fontSize: 20, color: '#000', marginTop: 2 }} />
      </Badge>
      <Avatar style={{ background: 'rgba(0,0,0,0.25)', marginLeft: 16 }} size={32} icon={<UserOutlined />} />
      <Text style={{ color: 'rgba(0,0,0,0.88)', fontWeight: 500, marginLeft: 16, minWidth: 76, lineHeight: '22px' }}>John Smith</Text>
    </div>
  </Header>
);

export default AppHeader;
