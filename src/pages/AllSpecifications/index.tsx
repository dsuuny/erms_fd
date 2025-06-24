import React from 'react';
import { Button, Input, Table, Pagination, Card, Space } from 'antd';
import { PlusOutlined, FileExcelOutlined, SearchOutlined, ExportOutlined } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import styles from '../../assets/styles/App.module.css';

const AllSpecifications: React.FC = () => {
  return (
    <div className={styles.mainInner} style={{ minHeight: '100vh', background: '#F5F5F5' }}>
      <div style={{ padding: '24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', minHeight: 38, marginBottom: 0 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ fontSize: 30, fontWeight: 600, color: 'rgba(0,0,0,0.88)', lineHeight: '38px', marginBottom: 0 }}>ETL Specifications</div>
            <div style={{ color: '#6B7280', lineHeight: '22px', fontSize: 14 }}>All active data transformation pipelines</div>
          </div>
        </div>
        <Card
          style={{
            background: '#fff',
            borderRadius: 6,
            boxShadow: '0 1px 4px 0 rgba(30,30,30,0.06)',
            marginTop: 16,
            padding: 0,
          }}
        >
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
              <Space size={8}>
                <Button type="primary" icon={<PlusOutlined />} style={{ height: 32, borderRadius: 6, fontWeight: 500, background: '#1677FF', boxShadow: '0px 2px 0px 0px rgba(5, 145, 255, 0.10)' }}>New Specification</Button>
                <Button icon={<FileExcelOutlined />} style={{ height: 32, borderRadius: 6, fontWeight: 500, background: '#fff', border: '1px solid #D9D9D9' }}>Import from Excel</Button>
              </Space>
              <Space size={8}>
                <Input prefix={<SearchOutlined />} placeholder="Search" style={{ width: 200, borderRadius: 6, background: '#fff', border: '1px solid #D9D9D9', height: 32, fontSize: 14 }} />
                <Button icon={<ExportOutlined />} style={{ height: 32, borderRadius: 6, background: '#fff', border: '1px solid #D9D9D9', fontWeight: 500 }}>Export</Button>
              </Space>
            </div>
            {/* Table 区域 */}
            <Table
              columns={[
                {
                  title: 'ID',
                  dataIndex: 'id',
                  key: 'id',
                  align: 'center' as const,
                  width: 80,
                  render: (id: number) => (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 32,
                      height: 32,
                      background: '#1677FF',
                      color: '#fff',
                      borderRadius: '50%',
                      fontWeight: 600,
                      fontSize: 16,
                    }}>{id}</span>
                  ),
                },
                {
                  title: 'Specification',
                  dataIndex: 'specification',
                  key: 'specification',
                  render: (text: string) => (
                    <span style={{ color: '#1677FF', fontWeight: 500, fontSize: 18 }}>{text}</span>
                  ),
                },
                {
                  title: 'Version',
                  dataIndex: 'version',
                  key: 'version',
                },
                {
                  title: 'Tables',
                  dataIndex: 'tables',
                  key: 'tables',
                  render: (num: number) => (
                    <span style={{
                      background: '#FAFAFA',
                      border: '1px solid #D9D9D9',
                      borderRadius: 4,
                      padding: '1px 7px',
                      display: 'inline-block',
                      minWidth: 22,
                      fontSize: 14,
                    }}>{num}</span>
                  ),
                },
                {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  render: (status: string) => {
                    let style = {};
                    let text = status;
                    if (status === 'Published') {
                      style = {
                        background: '#F6FFED',
                        border: '1px solid #B7EB8F',
                        color: '#52C41A',
                        borderRadius: 4,
                        fontSize: 14,
                        fontWeight: 500,
                        padding: '1px 7px',
                        minWidth: 56,
                        display: 'inline-block',
                        textAlign: 'center',
                      };
                    } else if (status === 'Draft') {
                      style = {
                        background: '#FFFBE6',
                        border: '1px solid #FFE58F',
                        color: '#FAAD14',
                        borderRadius: 4,
                        fontSize: 14,
                        fontWeight: 500,
                        padding: '1px 7px',
                        minWidth: 43,
                        display: 'inline-block',
                        textAlign: 'center',
                      };
                    } else if (status === 'Pending') {
                      style = {
                        background: '#FFC1C1',
                        border: '1px solid #FFBFBF',
                        color: '#FF4545',
                        borderRadius: 4,
                        fontSize: 14,
                        fontWeight: 500,
                        padding: '1px 7px',
                        minWidth: 47,
                        display: 'inline-block',
                        textAlign: 'center',
                      };
                    }
                    return <span style={style}>{text}</span>;
                  },
                },
                {
                  title: 'Created',
                  dataIndex: 'created',
                  key: 'created',
                },
                {
                  title: 'Actions',
                  key: 'actions',
                  align: 'center' as const,
                  width: 104,
                  render: () => (
                    <Space size={8}>
                      <Button type="text" icon={<EditOutlined />} />
                      <Button type="text" icon={<EllipsisOutlined />} />
                    </Space>
                  ),
                },
              ]}
              dataSource={[
                {
                  key: '1',
                  id: 1,
                  specification: 'Customer Data Integration',
                  version: 'v1.2.0',
                  tables: 5,
                  status: 'Published',
                  created: '2023-11-20',
                },
                {
                  key: '2',
                  id: 2,
                  specification: 'Sales Analytics Pipeline',
                  version: 'v2.0.1',
                  tables: 8,
                  status: 'Draft',
                  created: '2023-11-19',
                },
                {
                  key: '3',
                  id: 3,
                  specification: 'Inventory Sync Process',
                  version: 'v1.0.0',
                  tables: 3,
                  status: 'Pending',
                  created: '2023-11-18',
                },
              ]}
              pagination={false}
              bordered={false}
              style={{ background: '#fff', borderRadius: 6, marginBottom: 0 }}
              rowClassName={() => ''}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '16px 0 0 0' }}>
              <span style={{ color: '#6B7280', lineHeight: '30px' }}>Showing 1-10 of 84 specifications</span>
              <Pagination current={1} pageSize={10} total={84} showSizeChanger={false} style={{ marginLeft: 16 }} />
            </div>
          </div>
        </Card>
        <div style={{ textAlign: 'right', color: '#6B7280', fontSize: 14, marginTop: 10 }}>Last updated: Today 14:32</div>
      </div>
    </div>
  );
};

export default AllSpecifications;
