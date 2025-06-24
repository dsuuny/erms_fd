import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Sidebar from './components/Sidebar';
import styles from '../../assets/styles/App.module.css';
import '../../assets/styles/motiff-overrides.css';

const Layout: React.FC = () => (
  <div className={styles.container}>
    {/* Header */}
    <AppHeader />
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', minHeight: '100vh', height: '100vh', alignItems: 'flex-start', margin: 0, gap: 0, flexWrap: 'nowrap', paddingTop: 64, boxSizing: 'border-box' }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className={styles.main} style={{ flex: 1, minWidth: 0, width: 'auto' }}>
        <div className={styles.mainInner}>
          <Outlet />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
