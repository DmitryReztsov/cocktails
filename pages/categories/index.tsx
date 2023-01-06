import Head from 'next/head'
import {Typography} from "antd";

import { Card, Col, Row } from 'antd';
import Link from "next/link";

export default function Categories() {

  return (
    <>
      <Head>
        <title>Категории</title>
      </Head>
      <Typography.Title title={'h1'}>
        Категории
      </Typography.Title>
      <Row gutter={16}>
        <Col span={8}>
          <Link href={'/cocktails?type=long'}>
            <Card title="Лонги" bordered={false}>
              Хватит надолго
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Card title="Шоты" bordered={false}>
            По-быстрому
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Простые" bordered={false}>
            От Лиги Лени
          </Card>
        </Col>
      </Row>

    </>
  )
}