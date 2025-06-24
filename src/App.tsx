import React from 'react';
import { Layout, Menu, Input, Button, Typography, Badge, Avatar, Card, Row, Col } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined, FileTextOutlined, CheckCircleOutlined, ClockCircleOutlined, DashboardOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import styles from './assets/styles/App.module.css';
import './assets/styles/motiff-overrides.css';

const { Header } = Layout;
const { Title, Text } = Typography;

const specData = [
  { id: 'E-21', name: 'Sales Transformations', version: 'v3.1.5', status: 'Published', lastModified: '2023-12-15' },
  { id: 'E-87', name: 'Inventory Pipeline', version: 'v0.8', status: 'Draft', lastModified: '2023-12-14' },
  { id: 'E-92', name: 'Customer Analytics', version: 'v2.0.1', status: 'Review', lastModified: '2023-12-13' },
  { id: 'E-95', name: 'Product Metrics', version: 'v1.5.0', status: 'Published', lastModified: '2023-12-12' },
];

const notifications = [
  'New specification "Revenue Analysis" created',
  'Changes requested for "Customer Analytics"',
  '"Sales Transformations" approved by John Doe',
  'New version of "Inventory Pipeline" published',
];

const App: React.FC = () => (
  <div className={styles.container}>
    {/* Header */}
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
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', minHeight: '100vh', height: '100vh', alignItems: 'flex-start', margin: 0, gap: 0, flexWrap: 'nowrap', paddingTop: 64, boxSizing: 'border-box' }}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <Input prefix={<SearchOutlined />} placeholder="Search specifications" style={{ borderRadius: 6, marginBottom: 16, background: '#fff', width: '100%', minWidth: 120, height: 32, paddingLeft: 12, paddingRight: 12, fontSize: 14 }} />
          <Menu mode="inline" selectedKeys={['dashboard']} style={{ border: 'none', background: 'transparent', width: '100%' }}>
            <Menu.Item key="dashboard" icon={<DashboardOutlined style={{ fontSize: 16 }} />} style={{ background: '#E6F4FF', color: '#1677FF', borderRadius: 8, fontWeight: 500, marginBottom: 0, height: 40, paddingLeft: 24, paddingRight: 24, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-start', textAlign: 'left' }}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="all" icon={<FileTextOutlined style={{ fontSize: 16 }} />} style={{ height: 40, paddingLeft: 24, paddingRight: 24, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-start', textAlign: 'left' }}>
              All Specifications
            </Menu.Item>
            <Menu.Item key="my" icon={<UserOutlined style={{ fontSize: 16 }} />} style={{ height: 40, paddingLeft: 24, paddingRight: 24, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-start', textAlign: 'left' }}>
              My Specifications
            </Menu.Item>
            <Menu.Item key="published" icon={<CheckCircleOutlined style={{ fontSize: 16 }} />} style={{ height: 40, paddingLeft: 24, paddingRight: 24, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-start', textAlign: 'left' }}>
              Published
            </Menu.Item>
            <Menu.Item key="pending" icon={<ExclamationCircleOutlined style={{ fontSize: 16 }} />} style={{ height: 40, paddingLeft: 24, paddingRight: 24, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-start', textAlign: 'left' }}>
              Pending Review
            </Menu.Item>
          </Menu>
        </div>
      </div>
      {/* Main Content + Rightbar Row */}
      <div className={styles.main}>
        <div className={styles.mainInner}>
          {/* 统计卡片 Row - 用 flex 包裹保证等高 */}
          <div className={styles.statsRow}>
            <Card variant="outlined" className={styles.statCard}>
              <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Total Specifications</Title>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <span style={{ fontWeight: 600, fontSize: 30, lineHeight: '36px', color: 'rgba(0,0,0,0.88)' }}>156</span>
                <span style={{ background: '#F6FFED', border: '1px solid #B7EB8F', borderRadius: 4, color: '#52C41A', fontSize: 12, lineHeight: '20px', fontWeight: 500, padding: '3px 8px', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <img src="https://static.motiffcontent.com/private/resource/image/197a0567e07f41e-27944c86-2929-4d7e-959e-31507b8ffd50.svg" alt="up" style={{ width: 12, height: 12, marginRight: 4 }} />
                  12%
                </span>
              </div>
            </Card>
            <Card variant="outlined" className={styles.statCard}>
              <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Pending Approvals</Title>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <span style={{ color: '#FF4D4F', fontWeight: 600, fontSize: 30, lineHeight: '36px' }}>8</span>
                <span style={{ color: '#8C8C8C', fontSize: 14, lineHeight: '22px', marginTop: 7 }}>requests</span>
              </div>
            </Card>
            <Card variant="outlined" className={styles.statCard}>
              <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Published Ratio</Title>
              <div style={{ display: 'flex', alignItems: 'flex-start', minHeight: 120 }}>
                <img src="https://static.motiffcontent.com/private/resource/image/197a0567e082545-b192de1f-2953-4e5f-97ef-e79ea3fef474.svg" alt="pie" style={{ width: 120, height: 120 }} />
              </div>
              <span style={{ color: 'rgba(0,0,0,0.88)', textAlign: 'center', width: '100%', lineHeight: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>75% Published</span>
            </Card>
          </div>
          <Card variant="outlined" className={styles.activityCard}>
            <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Activity Overview</Title>
            <img src="https://static.motiffcontent.com/private/resource/image/197a0567e08d3fa-8b31692d-7201-4c67-a577-6ddfdc05bffd.svg" alt="line chart" style={{ width: '100%', maxWidth: 1000, height: 300 }} />
          </Card>
          {/* Recent Specifications + Rightbar Row 用栅格系统 */}
          <Row gutter={[24, 24]} align="stretch">
            <Col xs={24} lg={15} xl={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <Card variant="outlined" className={styles.tableCard}>
                <Title level={5} style={{ margin: '25px 0 0 25px', fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Recent Specifications</Title>
                {/* Table header */}
                <div className={styles.tableHeader}>
                  <div style={{ flex: '0 0 100px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>ID</div>
                  <div style={{ flex: '1 1 220px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>Specification Name</div>
                  <div style={{ flex: '0 0 120px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>Latest Version</div>
                  <div style={{ flex: '0 0 120px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>Status</div>
                  <div style={{ flex: '0 0 120px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>Last Modified</div>
                </div>
                {/* Table rows */}
                {specData.map(row => (
                  <div key={row.id} className={styles.tableRow}>
                    <div style={{ flex: '0 0 100px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>{row.id}</div>
                    <div style={{ flex: '1 1 220px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</div>
                    <div style={{ flex: '0 0 120px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>{row.version}</div>
                    <div style={{ flex: '0 0 120px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>
                      {row.status === 'Published' && (
                        <span style={{ background: '#F6FFED', border: '1px solid #B7EB8F', borderRadius: 4, color: '#52C41A', fontSize: 12, lineHeight: '20px', fontWeight: 500, padding: '1px 7px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 70 }}>Published</span>
                      )}
                      {row.status === 'Draft' && (
                        <span style={{ background: '#FFFBE6', border: '1px solid #FFE58F', borderRadius: 4, color: '#FAAD14', fontSize: 12, lineHeight: '20px', fontWeight: 500, padding: '1px 7px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 43 }}>Draft</span>
                      )}
                      {row.status === 'Review' && (
                        <span style={{ background: '#E6F4FF', border: '1px solid #91CAFF', borderRadius: 4, color: '#1677FF', fontSize: 12, lineHeight: '20px', fontWeight: 500, padding: '1px 7px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 55 }}>Review</span>
                      )}
                    </div>
                    <div style={{ flex: '0 0 120px', textAlign: 'left', display: 'flex', alignItems: 'center', height: '100%' }}>{row.lastModified}</div>
                  </div>
                ))}
              </Card>
            </Col>
            <Col xs={24} lg={9} xl={8} className={styles.rightbarCol}>
              <Card variant="outlined" className={styles.quickCard}>
                <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Quick Actions</Title>
                <Button type="primary" block style={{ borderRadius: 6, marginBottom: 8, background: '#1677FF', boxShadow: '0px 2px 0px 0px rgba(5, 145, 255, 0.10)', padding: '5px 67.83px', fontWeight: 500, fontSize: 14, lineHeight: '22px' }}>Create New Specification</Button>
                <Button block style={{ borderRadius: 6, background: '#fff', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.02)', border: '1px solid #D9D9D9', marginBottom: 0, padding: '5px 68.33px', fontWeight: 500, fontSize: 14, lineHeight: '22px' }}>Review Pending Changes</Button>
              </Card>
              <Card variant="outlined" className={styles.notifyCard}>
                <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'left' }}>Recent Notifications</Title>
                <div style={{ marginTop: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {notifications.map((item, idx) => (
                    <div key={idx} className={styles.notifyMsg}>{item}</div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
);

export default App;
