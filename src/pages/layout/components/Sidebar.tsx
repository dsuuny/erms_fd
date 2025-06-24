import React from 'react';
import { Menu, Input } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { SearchOutlined, DashboardOutlined, FileTextOutlined, UserOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import styles from '../../../assets/styles/App.module.css';

const menuItems = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined style={{ fontSize: 16 }} />,
    label: <span style={{ fontWeight: 500 }}>Dashboard</span>,
    className: styles.menuItem, // 统一样式
    to: '/dashboard'
  },
  {
    key: 'all-specifications',
    icon: <FileTextOutlined style={{ fontSize: 16 }} />,
    label: <span>All Specifications</span>,
    className: styles.menuItem,
    to: '/all-specifications'
  },
  {
    key: 'my-specifications',
    icon: <UserOutlined style={{ fontSize: 16 }} />,
    label: <span>My Specifications</span>,
    className: styles.menuItem,
    to: '/my-specifications'
  },
  {
    key: 'published',
    icon: <CheckCircleOutlined style={{ fontSize: 16 }} />,
    label: <span>Published</span>,
    className: styles.menuItem,
    to: '/published'
  },
  {
    key: 'pending-review',
    icon: <ExclamationCircleOutlined style={{ fontSize: 16 }} />,
    label: <span>Pending Review</span>,
    className: styles.menuItem,
    to: '/pending-review'
  }
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // 取当前路径最后一级作为 selectedKeys
  const selectedKey = menuItems.find(item => location.pathname.startsWith(item.to))?.key || 'dashboard';

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarInner}>
        <Input prefix={<SearchOutlined />} placeholder="Search specifications" style={{ borderRadius: 6, marginBottom: 16, background: '#fff', width: '100%', minWidth: 120, height: 32, paddingLeft: 12, paddingRight: 12, fontSize: 14 }} />
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{ border: 'none', background: 'transparent', width: '100%' }}
          items={menuItems}
          onClick={({ key }) => {
            const item = menuItems.find(i => i.key === key);
            if (item && item.to) navigate(item.to);
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
