import React from "react";

import styles from "./index.module.scss";

import {Col, Layout as AntLayout, Menu, Row, Typography, theme} from "antd";
import Link from "next/link";

const { useToken } = theme;

const {Header, Footer, Content} = AntLayout;

interface LayoutProps {
  children: React.ReactNode,
}

export default function Layout({children}: LayoutProps) {

  const { token } = useToken();

  const items = [
    {
      key: 1,
      label: <Link href={'/'}>Главная</Link>,
    },
    {
      key: 2,
      label: <Link href={'/categories'}>Категории</Link>,
    },
    {
      key: 3,
      label: <Link href={'/blog'}>Блог</Link>,
    },
  ]
  return (
    <>
      <AntLayout className={styles.layout}>
        <Header>
          <Row>
            <Col span={12}>
              <Typography.Text className={styles.logo} style={{ fontSize: token.fontSizeXL }}>
                PRO Cocktail
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Menu
                theme={'dark'}
                mode="horizontal"
                items={items}
                className={styles.menu}
              />
            </Col>
          </Row>
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer>Created by Dmitry Reztsov</Footer>
      </AntLayout>
    </>
  )
}