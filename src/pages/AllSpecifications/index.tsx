import React, { useState } from 'react';
import { Button, Input, Table, Pagination, Card, Space, Modal, Upload, Collapse, Tabs, Typography, Tag } from 'antd';
import { PlusOutlined, FileExcelOutlined, SearchOutlined, ExportOutlined, InboxOutlined } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import styles from '../../assets/styles/App.module.css';

const { Dragger } = Upload;
const { Panel } = Collapse;
const { Title, Text } = Typography;

const AllSpecifications: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setIsModalOpen(false);
    setFileList([]);
  };

  const handleReviewCancel = () => {
    setReviewModalOpen(false);
  }

  const handleNext = () => {
    if (fileList.length > 0) {
      setIsModalOpen(false);
      setReviewModalOpen(true);
    }
  };
  
  const handleBack = () => {
    setReviewModalOpen(false);
    setIsModalOpen(true);
  }

  const draggerProps = {
    name: 'file',
    multiple: false,
    accept: '.xlsx',
    fileList,
    onChange(info: any) {
      let fileList = [...info.fileList];
      fileList = fileList.slice(-1);
      setFileList(fileList);
    },
    beforeUpload: () => false, // Prevent auto-upload
  };

  const fieldColumns = [
    { title: 'Field Name', dataIndex: 'name', key: 'name' },
    { title: 'Data Type', dataIndex: 'type', key: 'type' },
    { title: 'Logic / Expression', dataIndex: 'logic', key: 'logic' },
  ];

  const mockData = {
    fileName: 'Sales_Analytics_Spec_v3.xlsx',
    tables: [
      {
        key: '1',
        name: 'Customer_Orders',
        fields: 12,
        fieldData: [
          { key: '1', name: 'order_id', type: 'INTEGER', logic: 'PRIMARY KEY' },
          { key: '2', name: 'customer_id', type: 'INTEGER', logic: 'FOREIGN KEY' },
          { key: '3', name: 'order_date', type: 'DATE', logic: 'EXTRACT(date FROM timestamp)' },
          { key: '4', name: 'total_amount', type: 'DECIMAL(10,2)', logic: 'SUM(item_price * quantity)' },
        ],
      },
      {
        key: '2',
        name: 'Product_Inventory',
        fields: 8,
        fieldData: [
           { key: '1', name: 'product_id', type: 'INTEGER', logic: 'PRIMARY KEY' },
           { key: '2', name: 'quantity', type: 'INTEGER', logic: '' },
        ],
      },
    ],
  };

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
                <Button icon={<FileExcelOutlined />} style={{ height: 32, borderRadius: 6, fontWeight: 500, background: '#fff', border: '1px solid #D9D9D9' }} onClick={showModal}>Import from Excel</Button>
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
      <Modal
        title="Import Specification from Excel"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" disabled={fileList.length === 0} onClick={handleNext}>
            Next
          </Button>,
        ]}
        width={620}
      >
        <Dragger {...draggerProps} style={{ padding: '48px 0' }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ fontSize: 48, color: '#1677FF' }} />
          </p>
          <p className="ant-upload-text" style={{ fontSize: 16, color: 'rgba(0,0,0,0.88)', fontWeight: 500 }}>Click or drag Excel file to this area to upload</p>
          <p className="ant-upload-hint" style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)' }}>
            Supports a single .xlsx file for import.
          </p>
        </Dragger>
      </Modal>
      <Modal
        title="Review Imported Specification"
        visible={isReviewModalOpen}
        onCancel={handleReviewCancel}
        footer={[
          <Button key="back" onClick={handleBack}>
            Back
          </Button>,
          <Button key="cancel" onClick={handleReviewCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleReviewCancel}>
            Confirm and Import
          </Button>,
        ]}
        width={800}
      >
        <Text>
          Successfully parsed <Text strong>{mockData.tables.length} tables</Text> from <Text strong>{mockData.fileName}</Text>.
        </Text>
        <Collapse defaultActiveKey={['1']} style={{marginTop: 24}}>
          {mockData.tables.map(table => (
            <Panel
              header={<Text strong>{table.name}</Text>}
              key={table.key}
              extra={<Tag color="blue">{table.fields} Fields</Tag>}
            >
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Fields" key="1">
                  <Table columns={fieldColumns} dataSource={table.fieldData} pagination={false} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Join" key="2">
                  Content of Join
                </Tabs.TabPane>
                <Tabs.TabPane tab="Filter" key="3">
                  Content of Filter
                </Tabs.TabPane>
                <Tabs.TabPane tab="Aggregation" key="4">
                  Content of Aggregation
                </Tabs.TabPane>
              </Tabs>
            </Panel>
          ))}
        </Collapse>
      </Modal>
    </div>
  );
};

export default AllSpecifications;
