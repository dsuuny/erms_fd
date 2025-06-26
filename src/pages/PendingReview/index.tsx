import React from 'react';
import { Card, Col, Row, Table, Tag, Button, Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/App.module.css';

const data = [
  {
    key: '1',
    id: 'E-92',
    specificationName: 'Customer Analytics',
    version: 'v2.0.2',
    status: 'Pending Review',
    requester: 'Alex Johnson',
    dateSubmitted: '2023-12-14',
    priority: 'High',
  },
  {
    key: '2',
    id: 'E-87',
    specificationName: 'Inventory Pipeline',
    version: 'v0.9',
    status: 'Pending Review',
    requester: 'Sarah Chen',
    dateSubmitted: '2023-12-13',
    priority: 'Medium',
  },
  {
    key: '3',
    id: 'E-103',
    specificationName: 'Revenue Analysis',
    version: 'v1.0',
    status: 'Pending Review',
    requester: 'Michael Brown',
    dateSubmitted: '2023-12-12',
    priority: 'High',
  },
  {
    key: '4',
    id: 'E-76',
    specificationName: 'Marketing Automation',
    version: 'v3.2',
    status: 'Pending Review',
    requester: 'Emily Davis',
    dateSubmitted: '2023-12-11',
    priority: 'Low',
  },
  {
    key: '5',
    id: 'E-118',
    specificationName: 'User Engagement',
    version: 'v1.3',
    status: 'Pending Review',
    requester: 'David Wilson',
    dateSubmitted: '2023-12-10',
    priority: 'Medium',
  },
  {
    key: '6',
    id: 'E-95',
    specificationName: 'Product Metrics',
    version: 'v1.6',
    status: 'Pending Review',
    requester: 'Lisa Taylor',
    dateSubmitted: '2023-12-09',
    priority: 'Medium',
  },
  {
    key: '7',
    id: 'E-112',
    specificationName: 'Data Integration',
    version: 'v2.1',
    status: 'Pending Review',
    requester: 'Robert Martin',
    dateSubmitted: '2023-12-08',
    priority: 'High',
  },
  {
    key: '8',
    id: 'E-89',
    specificationName: 'API Documentation',
    version: 'v4.0',
    status: 'Pending Review',
    requester: 'Jennifer Lopez',
    dateSubmitted: '2023-12-07',
    priority: 'Low',
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'red';
    case 'Medium':
      return 'orange';
    case 'Low':
      return 'green';
    default:
      return 'default';
  }
};

const PendingReview: React.FC = () => {
  const navigate = useNavigate();

  const handleReviewClick = (id: string) => {
    navigate(`/change-detail/${id}`);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Specification Name',
      dataIndex: 'specificationName',
      key: 'specificationName',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Requester',
      dataIndex: 'requester',
      key: 'requester',
    },
    {
      title: 'Date Submitted',
      dataIndex: 'dateSubmitted',
      key: 'dateSubmitted',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => <Tag color={getPriorityColor(priority)}>{priority}</Tag>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: any) => (
        <Button type="link" onClick={() => handleReviewClick(record.id)}>
          Review
        </Button>
      ),
    },
  ];

  return (
    <div className={styles.mainInner}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Specifications</Breadcrumb.Item>
        <Breadcrumb.Item>Pending Review</Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={16} style={{ marginBottom: '1rem' }}>
        <Col span={8}>
          <Card>
            <p style={{ fontWeight: 'bold' }}>Pending Reviews</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'red' }}>8</p>
              <p>specifications</p>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <p style={{ fontWeight: 'bold' }}>Average Review Time</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>1.2</p>
              <p>days</p>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <p style={{ fontWeight: 'bold' }}>High Priority Items</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fadb14' }}>3</p>
              <p>specifications</p>
            </div>
          </Card>
        </Col>
      </Row>
      <Card title="Pending Specifications">
        <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 'max-content' }} />
      </Card>
    </div>
  );
};

export default PendingReview;
