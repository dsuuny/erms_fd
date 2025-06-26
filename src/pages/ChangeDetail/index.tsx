import React from 'react';
import {
  Breadcrumb,
  Select,
  Switch,
  Card,
  Tag,
  Button,
  Row,
  Col,
  Timeline,
  Divider,
  Typography,
  Table,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EditOutlined,
  PlusOutlined,
  MinusOutlined,
  SwapOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styles from '../../assets/styles/App.module.css';
import whereStyles from './WhereClauseChanges.module.css';
import joinDiffStyles from './JoinConfigDiff.module.css';
import GrayTitleCard from '../../components/GrayTitleCard';

const { Option } = Select;
const { Title, Text, Paragraph } = Typography;

const fieldDefinitionData = [
  {
    key: '1',
    field: 'amount',
    current: (
      <pre>
        TYPE: DECIMAL(10,2)
        <br />
        DEFAULT: NULL
        <br />
        NULLABLE: YES
      </pre>
    ),
    proposed: (
      <Card style={{ background: '#f6ffed', border: '1px solid #b7eb8f' }}>
        <pre>
          TYPE: DECIMAL(12,2)
          <br />
          DEFAULT: 0.00
          <br />
          NULLABLE: NO
        </pre>
      </Card>
    ),
  },
];

const fieldDefinitionColumns = [
  {
    title: 'Field',
    dataIndex: 'field',
    key: 'field',
  },
  {
    title: 'Current (v2.3)',
    dataIndex: 'current',
    key: 'current',
  },
  {
    title: 'Proposed (v2.4)',
    dataIndex: 'proposed',
    key: 'proposed',
  },
];

const ChangeDetail: React.FC = () => {
  return (
    <div className={styles.mainInner}>


      <Card>
              <Row justify="space-between" align="middle">
        <Col>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Change Tickets</Breadcrumb.Item>
            <Breadcrumb.Item>CR-92</Breadcrumb.Item>
          </Breadcrumb>
          <Title level={2}>Change Request: CR-92</Title>
        </Col>
        <Col>
          <Tag color="gold">Pending Review</Tag>
        </Col>
      </Row>
        <Card style={{ marginBottom: '1rem', background: '#f5f5f5' }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Row align="middle" gutter={16}>
                <Col>
                  <div>
                    <Text>Current</Text>
                    <Select defaultValue="v2.3" style={{ width: 120 }}>
                      <Option value="v2.3">v2.3</Option>
                    </Select>
                  </div>
                </Col>
                <Col>
                  <div>
                    <Text>Proposed</Text>
                    <Select defaultValue="v2.4" style={{ width: 120 }}>
                      <Option value="v2.4">v2.4</Option>
                    </Select>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle" gutter={16}>
                <Col>
                  <Text>Toggle View:</Text>
                  <Switch checkedChildren="Split" unCheckedChildren="Side-by-Side" defaultChecked />
                </Col>
                <Col>
                  <Text>Show Conflicts:</Text>
                  <Switch />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>

        <GrayTitleCard title="Field Definition Changes" icon={<EditOutlined />} style={{ marginBottom: '1.5rem' }}>
          <Table
            columns={fieldDefinitionColumns}
            dataSource={fieldDefinitionData}
            pagination={false}
          />
        </GrayTitleCard>
        <GrayTitleCard title="Join Configuration" icon={<SwapOutlined />} style={{ marginBottom: '1.5rem' }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card title={<div className={joinDiffStyles.colHeader}>Current (v2.3)</div>} bordered={false} style={{ background: 'transparent', boxShadow: 'none' }} bodyStyle={{ padding: 0 }}>
              <div className={`${joinDiffStyles.diffBlock} ${joinDiffStyles.removed}`}>
                <div className={joinDiffStyles.diffTitle}><MinusOutlined className={joinDiffStyles.icon} /> Removed Join</div>
                <div className={joinDiffStyles.diffText}>LEFT JOIN Promotions p ON o.promo_id = p.id</div>
              </div>
              <div className={`${joinDiffStyles.diffBlock} ${joinDiffStyles.modified}`}>
                <div className={joinDiffStyles.diffTitle}><EditOutlined className={joinDiffStyles.icon} /> Modified Join</div>
                <div className={joinDiffStyles.diffText}>Customers c ON o.cust_id = c.id</div>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card title={<div className={joinDiffStyles.colHeader}>Proposed (v2.4)</div>} bordered={false} style={{ background: 'transparent', boxShadow: 'none' }} bodyStyle={{ padding: 0 }}>
              <div className={`${joinDiffStyles.diffBlock} ${joinDiffStyles.added}`}>
                <div className={joinDiffStyles.diffTitle}><PlusOutlined className={joinDiffStyles.icon} /> Added Join</div>
                <div className={joinDiffStyles.diffText}>INNER JOIN Currency_Rates c ON o.currency_id = c.id</div>
              </div>
              <div className={`${joinDiffStyles.diffBlock} ${joinDiffStyles.modified}`}>
                <div className={joinDiffStyles.diffTitle}><EditOutlined className={joinDiffStyles.icon} /> Modified Join</div>
                <div className={joinDiffStyles.diffText}>LEFT JOIN Customers c ON o.cust_id = c.id AND c.status = 'active'</div>
              </div>
            </Card>
          </Col>
        </Row>
        </GrayTitleCard>

        <GrayTitleCard title={<span><InfoCircleOutlined style={{marginRight: 8}}/>Where Clause Changes</span>} style={{ marginBottom: '1.5rem' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card bordered={false} style={{ background: 'rgb(249,250,251)', boxShadow: 'none', minHeight: 120 }} bodyStyle={{ padding: 20 }}>
                <div className={whereStyles.label}>CURRENT (v2.3)</div>
                <div className={whereStyles.sqlText}>
                  WHERE order_date {'>'} '2023-01-01'
                  <br />  AND country IN ('US','CA')
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false} style={{ background: '#f6ffed', boxShadow: 'none', minHeight: 120 }} bodyStyle={{ padding: 20 }}>
                <div className={whereStyles.label}>PROPOSED (v2.4)</div>
                <div className={whereStyles.sqlText}>
                  WHERE order_date {'>'} '2024-01-01' [MODIFIED]
                  <br />  AND region = 'North America' [ADDED]
                  <br />  AND status NOT IN ('cancelled') [ADDED]
                </div>
              </Card>
            </Col>
          </Row>
        </GrayTitleCard>
        <GrayTitleCard title={<span><SettingOutlined style={{marginRight: 8}}/>Group By Modifications</span>} style={{ marginBottom: '1.5rem' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card bordered={false} style={{ background: 'rgb(249,250,251)', boxShadow: 'none', minHeight: 120 }} bodyStyle={{ padding: 20 }}>
                <div className={whereStyles.label}>CURRENT (v2.3)</div>
                <div className={whereStyles.sqlText}>
                  SELECT
                  <br />  customer_id,
                  <br />  SUM(amount) AS total_amount
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false} style={{ background: '#f6ffed', boxShadow: 'none', minHeight: 120 }} bodyStyle={{ padding: 20 }}>
                <div className={whereStyles.label}>PROPOSED (v2.4)</div>
                <div className={whereStyles.sqlText}>
                  SELECT
                  <br />  customer_id,
                  <br />  DATE_TRUNC('month', order_date) AS order_month, [ADDED]
                  <br />  SUM(amount * exchange_rate) AS converted_total, [MODIFIED]
                  <br />  COUNT(DISTINCT order_id) AS orders_count [ADDED]
                </div>
              </Card>
            </Col>
          </Row>
        </GrayTitleCard>

        <GrayTitleCard title="Impact Analysis" style={{ marginBottom: '1.5rem' }}>
          <Paragraph>
            <ExclamationCircleOutlined /> Estimated affected rows: <Text strong>1.2M</Text> (18% increase)
          </Paragraph>
          <Paragraph>
            <InfoCircleOutlined /> Downstream dependencies: <Text strong>2 reports, 1 dashboard</Text>
          </Paragraph>
          <Card style={{ background: '#fffbe6', border: '1px solid #ffe58f' }}>
            <Text strong>
              <ExclamationCircleOutlined /> Performance Impact
            </Text>
            <Paragraph>
              The addition of the new join and aggregation logic may increase query execution time by approximately 15%. Consider adding indexes on currency_id and order_date columns.
            </Paragraph>
          </Card>
        </GrayTitleCard>
        <GrayTitleCard title="Audit Trail" style={{ marginBottom: '1.5rem' }}>
          <Timeline>
            <Timeline.Item dot={<UserOutlined />}>
              <Text strong>John Doe (Approver)</Text> <Text type="secondary">2023-06-25 14:30</Text>
              <p>"Verified currency conversion logic matches new FRB-842 policy"</p>
            </Timeline.Item>
            <Timeline.Item dot={<UserOutlined />}>
              <Text strong>Alex Johnson (Author)</Text> <Text type="secondary">2023-06-24 11:15</Text>
              <p>"Implemented the currency conversion as specified in FRB-842"</p>
            </Timeline.Item>
          </Timeline>
        </GrayTitleCard>

        <Row justify="end" gutter={8}>
          <Col>
            <Button icon={<CloseCircleOutlined />}>Reject</Button>
          </Col>
          <Col>
            <Button icon={<EditOutlined />}>Request Changes</Button>
          </Col>
          <Col>
            <Button type="primary" icon={<CheckCircleOutlined />}>
              Approve
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ChangeDetail;