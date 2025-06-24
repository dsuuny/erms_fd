import React from 'react';
import { Button, Table, Tag, Typography, Space, Collapse } from 'antd';
import { PlusOutlined, ExportOutlined, BranchesOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import styles from '../../assets/styles/App.module.css';

const { Text } = Typography;
const { Panel } = Collapse;

interface EtlTableData {
  key: number;
  name: string;
  generated: string;
  link: string;
}

const etlData: EtlTableData[] = [
  {
    key: 1,
    name: 'dim_customers',
    generated: '2023-08-15 14:32',
    link: '/etl/dim_customers',
  },
  {
    key: 2,
    name: 'fact_sales',
    generated: '2023-08-14 09:15',
    link: '/etl/fact_sales',
  },
];

const columns: ColumnsType<EtlTableData> = [
  {
    title: 'No',
    dataIndex: 'key',
    width: 60,
    align: 'center',
  },
  {
    title: 'ETL Table Name',
    dataIndex: 'name',
    render: (text, record) => (
      <a href={record.link} style={{ color: '#1677ff' }}>{text}</a>
    ),
  },
  {
    title: 'Generated Time',
    dataIndex: 'generated',
    width: 180,
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    width: 80,
    render: () => (
      <Space>
        <Button type="text" icon={<span className="anticon"><svg width="16" height="16" fill="none" stroke="#222" strokeWidth="1.5"><path d="M4 12v-2.5A2.5 2.5 0 0 1 6.5 7h3A2.5 2.5 0 0 1 12 9.5V12"/><circle cx="8" cy="5" r="2.5"/></svg></span>} />
        <Button type="text" icon={<span className="anticon"><svg width="16" height="16" fill="none" stroke="#222" strokeWidth="1.5"><circle cx="8" cy="8" r="1.5"/><circle cx="8" cy="8" r="7"/></svg></span>} />
      </Space>
    ),
  },
];

const versionHistory = [
  {
    version: 'v2.4',
    desc: 'Updated customer dimension tables',
    author: 'John Chen',
    time: '3 hours ago',
  },
  {
    version: 'v2.3',
    desc: 'Added new sales metrics',
    author: 'Sarah Lee',
    time: '2 days ago',
  },
];

const MySpecifications: React.FC = () => {
  return (
    <div className={styles.mainInner}>
      {/* Top Controls Row - Flex for equal height */}
      <div className={styles.statsRow} style={{ marginBottom: 24 }}>
        <Button style={{ width: 200, borderRadius: 6, borderColor: '#D9D9D9', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1px 11px 1px 12px' }}>
          <span style={{ color: 'rgba(0,0,0,0.88)' }}>Master</span>
        </Button>
        <Button style={{ width: 200, borderRadius: 6, borderColor: '#D9D9D9', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1px 11px 1px 12px' }}>
          <span style={{ color: 'rgba(0,0,0,0.88)' }}>v2.4 (Latest)</span>
        </Button>
        <Button style={{ width: 92, borderRadius: 6, borderColor: '#D9D9D9', background: '#fff', boxShadow: '0px 2px 0px 0px rgba(0,0,0,0.02)', padding: '5.5px 15.63px' }}>Compare</Button>
        <Button type="primary" style={{ width: 100.5, borderRadius: 6, background: '#1677FF', boxShadow: '0px 2px 0px 0px rgba(5,145,255,0.10)', padding: '5.5px 15.75px' }} icon={<BranchesOutlined />}>Branch</Button>
      </div>
      {/* Info Card */}
      <div className={styles.infoCard} style={{ background: '#fff', border: '1px solid #F0F0F0', borderRadius: 8, padding: '18px 26.56px 25px 25px', marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <Text type="secondary" style={{ width: 80, marginTop: 6.5 }}>Spec Name:</Text>
          <div style={{ width: 698.44, display: 'flex', justifyContent: 'space-between' }}>
            <Text type="secondary" style={{ width: 48, marginTop: 6.5 }}>Owner:</Text>
            <div style={{ width: 336.44, display: 'flex', justifyContent: 'space-between' }}>
              <Text type="secondary" style={{ width: 94, marginTop: 6.5 }}>Last Modified:</Text>
              <Tag color="#FFFBE6" style={{ color: '#FAAD14', borderColor: '#FFE58F', borderRadius: 4, fontSize: 12, fontWeight: 400, padding: '1px 7px', background: '#FFFBE6', marginBottom: 6.5 }}>Draft</Tag>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ color: 'rgba(0,0,0,0.88)', fontWeight: 500 }}>Sales Pipeline</span>
          <span style={{ color: 'rgba(0,0,0,0.88)', fontWeight: 500 }}>John Chen</span>
          <span style={{ color: 'rgba(0,0,0,0.88)', fontWeight: 500, marginLeft: 21 }}>3 hours ago</span>
        </div>
        <div style={{ marginTop: 15.5, color: '#6B7280' }}>Description:</div>
        <div style={{ color: 'rgba(0,0,0,0.88)', fontWeight: 500, marginTop: 0.5 }}>Revenue transformation models for FY2024 reporting</div>
      </div>
      {/* Table Row */}
      <div style={{ marginBottom: 24 }}>
        <Table
          columns={columns}
          dataSource={etlData}
          pagination={false}
          bordered
        />
      </div>
      {/* Version History */}
      <div style={{ marginBottom: 24 }}>
        <Collapse defaultActiveKey={['1']} style={{ background: '#fafbfc' }}>
          <Panel header={<b>Version History</b>} key="1">
            {versionHistory.map((v) => (
              <div key={v.version} style={{ marginBottom: 12, display: 'flex', alignItems: 'center' }}>
                <Tag color="blue" style={{ marginRight: 8 }}>{v.version}</Tag>
                <Text>{v.desc}</Text>
                <Text type="secondary" style={{ marginLeft: 16 }}>By {v.author}, {v.time}</Text>
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>
      {/* Footer Actions Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button icon={<ExportOutlined />}>Export Spec</Button>
        <Button type="primary" icon={<PlusOutlined />}>Add Table</Button>
      </div>
    </div>
  );
};

export default MySpecifications;
