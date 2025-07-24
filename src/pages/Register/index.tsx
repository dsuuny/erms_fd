import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './Register.module.css';
import logo from '../../assets/images/Icon.png';

const { Title, Text, Link } = Typography;

const ROLES = ['Approver', 'Developer', 'Support', 'Viewer', 'Submitter'];

const RegisterPage: React.FC = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleRoleClick = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', { ...values, roles: selectedRoles });
  };

  return (
    <Row className={styles.loginPage}>
      <Col span={10} className={styles.leftPanel}>
        <div className={styles.leftPanelContent}>
          <Title level={1} className={styles.title}>ERMS</Title>
          <Text className={styles.subtitle}>ETL Specification Management Service</Text>
          <img src={logo} alt="ERMS Logo" className={styles.logo} />
        </div>
      </Col>
      <Col span={14} className={styles.rightPanel}>
        <div className={styles.loginFormContainer}>
          <Title level={2} className={styles.formTitle}>Create Account</Title>
          <Text type="secondary" className={styles.formSubtitle}>Register to join the ERMS system</Text>
          <Form
            name="normal_register"
            className={styles.loginForm}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Staff ID"
              name="staffId"
              rules={[{ required: true, message: 'Please input your Staff ID!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your staff ID" size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Enter your password"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="Select Role"
              name="role"
              rules={[{ required: true, message: 'Please select your role!' }]}
            >
              <div className={styles.roleSelector}>
                {ROLES.map(role => (
                  <Button
                    key={role}
                    className={`${styles.roleButton} ${selectedRoles.includes(role) ? styles.selected : ''}`}
                    onClick={() => handleRoleClick(role)}
                  >
                    {role}
                  </Button>
                ))}
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.loginButton} size="large" block>
                Register
              </Button>
            </Form.Item>
            <div className={styles.orSeparator}>
              <span className={styles.orText}>or</span>
            </div>
            <Form.Item className={styles.registerNow}>
              Already have an account? <Link href="/login">Sign in</Link>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;