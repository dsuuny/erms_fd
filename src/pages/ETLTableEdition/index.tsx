import React, { useCallback, useState } from 'react';
import JoinTab from './components/JoinTab';
import { Card, Tabs, Select, Button, Breadcrumb, Typography, Row, Col, Input, Table, Space } from 'antd';
import { PlusOutlined, DeleteOutlined, CheckCircleFilled, WarningFilled } from '@ant-design/icons';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MarkerType, Handle, Position } from 'reactflow';
import type { Edge, Node, Connection } from 'reactflow';
import 'reactflow/dist/style.css';
import styles from './ETLTableEdition.module.css';

const { Title, Text } = Typography;

const fields = [
  { key: 1, name: 'customer_id', type: 'STRING', logic: 'Customers.customer_id' },
  { key: 2, name: 'customer_name', type: 'STRING', logic: 'Customers.full_name' },
  { key: 3, name: 'total_orders', type: 'INT', logic: 'COUNT(Orders.order_id)' },
  { key: 4, name: 'lifetime_value', type: 'DECIMAL', logic: 'SUM(Orders.order_total)' },
];

const initialNodes: Node[] = [
  { id: 'customers', type: 'custom', data: { label: 'Customers', source: true }, position: { x: 50, y: 40 } },
  { id: 'orders', type: 'custom', data: { label: 'Orders', source: true }, position: { x: 50, y: 120 } },
  { id: 'products', type: 'custom', data: { label: 'Products', source: true }, position: { x: 50, y: 200 } },
  { id: 'customer_360', type: 'custom', data: { label: 'Customer_360', target: true }, position: { x: 270, y: 120 } },
];

const initialEdges: Edge[] = [
  { id: 'e-customers-customer_360', source: 'customers', target: 'customer_360', type: 'step', style: { stroke: '#bfbfbf', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#bfbfbf' } },
  { id: 'e-orders-customer_360', source: 'orders', target: 'customer_360', type: 'step', style: { stroke: '#bfbfbf', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#bfbfbf' } },
  { id: 'e-products-customer_360', source: 'products', target: 'customer_360', type: 'step', style: { stroke: '#bfbfbf', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#bfbfbf' } },
];

const CustomNode = ({ data }: { data: { label: string, source?: boolean, target?: boolean } }) => {
  return (
    <div
      className={
        data.target
          ? styles.targetNode
          : data.source
          ? styles.sourceNode
          : styles.node
      }
    >
      {data.target && <Handle type="target" position={Position.Left} />}
      {data.label}
      {data.source && <Handle type="source" position={Position.Right} />}
    </div>
  );
};

const nodeTypes = {
    custom: CustomNode,
};

const FlowChart = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge | Connection) => setEdges((els) => addEdge(params, els)), [setEdges]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            proOptions={{ hideAttribution: true }}
        >
        </ReactFlow>
    );
};

const TableStructureCard = () => {
    return (
        <Card title={<span style={{fontWeight:500}}>Table Structure</span>} bordered={false} className={styles.card}>
            <div style={{ height: 280 }}>
                <FlowChart />
            </div>
        </Card>
    );
};

const FieldReferencesCard = () => (
    <Card title={<span style={{fontWeight:500}}>Field References</span>} bordered={false} className={styles.card}>
    <div style={{marginBottom:8}}>
      <Text strong>Customers</Text>
      <div style={{color:'#888',fontSize:13}}>customer_id<br/>full_name<br/>email<br/>status</div>
    </div>
    <div style={{marginBottom:8}}>
      <Text strong>Orders</Text>
      <div style={{color:'#888',fontSize:13}}>order_id<br/>customer_id<br/>order_date<br/>order_total</div>
    </div>
    <div>
      <Text strong>Products</Text>
      <div style={{color:'#888',fontSize:13}}>product_id<br/>product_name</div>
    </div>
  </Card>
);

const ValidationCard = () => (
    <Card title={<span style={{fontWeight:500}}>Validation</span>} bordered={false} className={styles.card}>
    <div className={styles.validationItem} style={{color:'#52c41a'}}>
      <CheckCircleFilled /> No syntax errors detected
    </div>
    <div className={styles.validationItem} style={{color:'#1890ff'}}>
      <CheckCircleFilled /> All referenced fields exist
    </div>
    <div className={styles.validationItem} style={{color:'#faad14'}}>
      <WarningFilled /> Performance warning: Large table join
    </div>
  </Card>
);

const FieldsTable = () => {
  return (
    <div className={styles.fieldsConfig}>
      <div className={styles.fieldsGridHeader}>
        <span>No.</span>
        <span>Field Name</span>
        <span>Data Type</span>
        <span>Logic / Expression</span>
        <span style={{ textAlign: 'center' }}>Actions</span>
      </div>
      {fields.map((field, index) => (
        <div key={field.key} className={styles.fieldsGridRow}>
          <span className={styles.rowNumber}>{index + 1}</span>
          <Input defaultValue={field.name} />
          <Select defaultValue={field.type} style={{ width: '100%' }}>
            <Select.Option value="STRING">STRING</Select.Option>
            <Select.Option value="INT">INT</Select.Option>
            <Select.Option value="DECIMAL">DECIMAL</Select.Option>
          </Select>
          <Input defaultValue={field.logic} />
          <Button
            icon={<DeleteOutlined />}
            type="text"
            danger
            shape="circle"
            style={{ margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
        </div>
      ))}
      <div className={styles.addFieldFooter}>
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          block
        >
          Add Field
        </Button>
      </div>
    </div>
  );
};

const ETLTableEdition: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fields');

  return (

      <Card>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>ETL Specifications</Breadcrumb.Item>
          <Breadcrumb.Item>Customer Data Integration</Breadcrumb.Item>
          <Breadcrumb.Item>Edit: Customer_360</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.header}>
          <Title level={3} style={{ margin: 0 }}>Edit ETL Table: Customer_360</Title>
          <Space>
            <span>Branch:</span>
            <Select defaultValue="master" style={{ width: 120 }} bordered={false}>
              <Select.Option value="master">master</Select.Option>
            </Select>
            <span>Version:</span>
            <Select defaultValue="v2.4" style={{ width: 100 }} bordered={false}>
              <Select.Option value="v2.4">v2.4</Select.Option>
            </Select>
            <Button>Compare Versions</Button>
          </Space>
        </div>
        <Tabs defaultActiveKey="fields" onChange={setActiveTab}>
          <Tabs.TabPane tab="Fields" key="fields" />
          <Tabs.TabPane tab="Join" key="join" />
          <Tabs.TabPane tab="Filter" key="filter" />
          <Tabs.TabPane tab="Aggregation" key="aggregation" />
        </Tabs>
        <Row gutter={24}>
          <Col span={activeTab === 'join' ? 16 : 24}>
            {activeTab === 'fields' && (
              <Row gutter={24}>
                <Col span={16}>
                  <FieldsTable />
                </Col>
                <Col span={8}>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <TableStructureCard />
                    <FieldReferencesCard />
                    <ValidationCard />
                  </Space>
                </Col>
              </Row>
            )}
            {activeTab === 'join' && <JoinTab />}
          </Col>
          {activeTab === 'join' && (
            <Col span={8}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <FieldReferencesCard />
                <ValidationCard />
              </Space>
            </Col>
          )}
        </Row>
        <div className={styles.footer}>
          <Text type="secondary">Last edited by John Doe • 2 hours ago</Text>
          <Space>
            <Button>Cancel</Button>
            <Button type="primary">Submit for Review</Button>
          </Space>
        </div>
      </Card>
    
  );
};

export default ETLTableEdition;
