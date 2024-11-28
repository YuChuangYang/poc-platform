"use client"
import React, { useEffect, useState } from 'react';
import styles from '@/app/ui/home.module.scss'
import {
  HomeFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingFilled,
  UploadOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';


const { Header, Sider, Content } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // 菜单列表
  const menuList = [
    {
      key: 'home',
      icon: <HomeFilled />,
      label: '主页',
    },
    {
      key: '2',
      icon: <SettingFilled />,
      label: '系统',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: '日志',
    },
  ]

  // 处理菜单逻辑
  const [currentMenu, setCurrentMenu] = useState('home')
  const router = useRouter();
  const handleMenuClick = (e: any) => {
    setCurrentMenu(e.key)
    router.push(e.key)
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className={styles.sider} >
      <div className={styles.logoContainer}>POC</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[currentMenu]}
          items={menuList}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, height: 56 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 56,
              height: 56,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '16px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}
