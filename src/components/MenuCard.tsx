import React from 'react';
import { Card, Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './MenuCard.module.css';

const items = [
  {
    key: 'overview',
    icon: <AppstoreOutlined />,
    label: 'Overview',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

const MenuCard: React.FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  return (
    <Card className={styles.menuCard} bordered={false} bodyStyle={{ padding: 24 }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['overview']}
        items={items}
        className={styles.menuBar}
      />
      {title && <div className={styles.cardTitle}>{title}</div>}
      <div>{children}</div>
    </Card>
  );
};

export default MenuCard;
