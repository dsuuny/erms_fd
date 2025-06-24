import React from 'react';
import { Row, Col } from 'antd';
import styles from '../../assets/styles/App.module.css';
import {
  TotalSpecificationsCard,
  PendingApprovalsCard,
  PublishedRatioCard,
  ActivityOverviewCard,
  RecentSpecificationsTable,
  QuickActionsCard,
  RecentNotificationsCard
} from './components';

const Dashboard: React.FC = () => (
  <div className={styles.mainInner}>
    {/* 统计卡片 Row - 用 flex 包裹保证等高 */}
    <div className={styles.statsRow}>
      <TotalSpecificationsCard />
      <PendingApprovalsCard />
      <PublishedRatioCard />
    </div>
    <ActivityOverviewCard />
    {/* Recent Specifications + Rightbar Row 用栅格系统 */}
    <Row gutter={[24, 24]} align="stretch">
      <Col xs={24} lg={15} xl={16} style={{ display: 'flex', flexDirection: 'column' }}>
        <RecentSpecificationsTable />
      </Col>
      <Col xs={24} lg={9} xl={8} className={styles.rightbarCol}>
        <QuickActionsCard />
        <RecentNotificationsCard />
      </Col>
    </Row>
  </div>
);

export default Dashboard;
