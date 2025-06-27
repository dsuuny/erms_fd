import { useCallback } from 'react';
import { Card, Select, Button, Typography, Space } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Handle, Position, Controls, Background } from 'reactflow';
import type { Edge, Node, Connection } from 'reactflow';
import 'reactflow/dist/style.css';
import styles from './JoinTab.module.css';

const { Title } = Typography;

const initialNodes: Node[] = [
  {
    id: 'customers',
    type: 'table',
    position: { x: 50, y: 50 },
    data: {
      tableName: 'Customers',
      columns: [
        { id: 'customer_id', name: 'customer_id', inJoin: true },
        { id: 'full_name', name: 'full_name' },
        { id: 'email', name: 'email' },
        { id: 'status', name: 'status' },
      ],
      rowCount: 4,
    },
  },
  {
    id: 'orders',
    type: 'table',
    position: { x: 350, y: 50 },
    data: {
      tableName: 'Orders',
      columns: [
        { id: 'order_id', name: 'order_id' },
        { id: 'customer_id', name: 'customer_id', inJoin: true },
        { id: 'product_id', name: 'product_id', inJoin: true },
        { id: 'order_date', name: 'order_date' },
        { id: 'order_total', name: 'order_total' },
      ],
      rowCount: 4,
    },
  },
  {
    id: 'products',
    type: 'table',
    position: { x: 650, y: 50 },
    data: {
      tableName: 'Products',
      columns: [
        { id: 'product_id', name: 'product_id', inJoin: true },
        { id: 'product_name', name: 'product_name' },
      ],
      rowCount: 2,
    },
  },
];

const initialEdges: Edge[] = [
  { id: 'e-customers-orders', source: 'customers', target: 'orders', sourceHandle: 'customer_id', targetHandle: 'customer_id', style: { stroke: '#1677FF', strokeWidth: 2 }, type: 'smoothstep' },
  { id: 'e-orders-products', source: 'orders', target: 'products', sourceHandle: 'product_id', targetHandle: 'product_id', style: { stroke: '#BDBDBD', strokeWidth: 2, strokeDasharray: '5 5' }, type: 'smoothstep' },
];

const TableNode = ({ data }: { data: any }) => {
  return (
    <div className={styles.tableNode}>
      <div className={styles.tableNodeHeader}>{data.tableName}</div>
      <div className={styles.tableNodeBody}>
        {data.columns.map((col: any) => (
          <div key={col.id} className={styles.tableNodeColumn}>
            {col.inJoin && <div className={styles.joinHandleIndicator} />}
            {col.name}
            <Handle
              type="source"
              position={Position.Right}
              id={col.id}
              className={styles.handle}
            />
            <Handle
              type="target"
              position={Position.Left}
              id={col.id}
              className={styles.handle}
            />
          </div>
        ))}
      </div>
      <div className={styles.tableNodeFooter}>{data.rowCount} fields</div>
    </div>
  );
};

const nodeTypes = {
  table: TableNode,
};

const TableRelationshipCard = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: Edge | Connection) => setEdges((els) => addEdge(params, els)), [setEdges]);

  return (
    <Card title={<Title level={5}>Table Relationship</Title>} bordered={false} className={styles.card}>
      <div style={{ height: 300 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          proOptions={{ hideAttribution: true }}>

          <Background />
        </ReactFlow>
      </div>
    </Card>
  );
};


const joinTypes = ['Inner Join', 'Left Join', 'Right Join', 'Full Join'];
const tableOptions = ['Customers', 'Orders', 'Products'];
const columnOptions = {
  Customers: ['customer_id', 'full_name', 'email', 'status'],
  Orders: ['order_id', 'customer_id', 'product_id', 'order_date', 'order_total'],
  Products: ['product_id', 'product_name'],
};


type TableName = keyof typeof columnOptions;

const JoinConfiguration = () => {
  const joins = [
    { id: 1, sourceTable: 'Customers', sourceColumn: 'customer_id', joinType: 'Inner Join', targetTable: 'Orders', targetColumn: 'customer_id' },
    { id: 2, sourceTable: 'Orders', sourceColumn: 'product_id', joinType: 'Left Join', targetTable: 'Products', targetColumn: 'product_id' },
  ];

  return (
    <div className={styles.joinConfig}>
      <div className={styles.joinGridHeader}>
        <span>Source Table</span>
        <span>Source Column</span>
        <span>Join Type</span>
        <span>Target Table</span>
        <span>Target Column</span>
        <span style={{ textAlign: 'center' }}>Actions</span>
      </div>
      {joins.map(join => (
        <div key={join.id} className={styles.joinGridRow}>
          <Select
            value={join.sourceTable}
            options={tableOptions.map(t => ({ value: t, label: t }))}
          />
          <Select
            value={join.sourceColumn}
            options={(columnOptions[join.sourceTable as TableName] as string[]).map((c: string) => ({ value: c, label: c }))}
          />
          <Select
            value={join.joinType}
            options={joinTypes.map(jt => ({ value: jt, label: jt }))}
          />
          <Select
            value={join.targetTable}
            options={tableOptions.map(t => ({ value: t, label: t }))}
          />
          <Select
            value={join.targetColumn}
            options={(columnOptions[join.targetTable as TableName] as string[]).map((c: string) => ({ value: c, label: c }))}
          />
          <Button
            icon={<DeleteOutlined />}
            type="text"
            danger
            shape="circle"
            style={{ margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
        </div>
      ))}
      <div className={styles.addJoinFooter}>
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          block
        >
          Add Join
        </Button>
      </div>
    </div>
  );
};

const JoinTab = () => {
  return (
    <div className={styles.container}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <JoinConfiguration />
        <TableRelationshipCard />
        
      </Space>
    </div>
  );
};

export default JoinTab;