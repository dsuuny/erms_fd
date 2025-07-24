import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './Login.module.css';
import logo from '../../assets/images/Icon.png';

const { Title, Text, Link } = Typography;

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
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
          <Title level={2} className={styles.formTitle}>Login</Title>
          <Text type="secondary" className={styles.formSubtitle}>Welcome to ERMS system</Text>
          <Form
            name="normal_login"
            className={styles.loginForm}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username or Email!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username or Email" size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Link href="#" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.loginButton} size="large" block>
                Login
              </Button>
            </Form.Item>
            <div className={styles.orSeparator}>
              <span className={styles.orText}>or</span>
            </div>
            <Form.Item className={styles.registerNow}>
              Don't have an account? <Link href="#">Register now</Link>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
