import Head from 'next/head'
import {Typography} from "antd";
import { Card, Col, Row } from 'antd';
import Link from "next/link";
import client from "../../contentful-api";
import {ICocktail} from "../../@types/generated/contentful";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

import styles from "./index.module.scss";


const { Meta } = Card;

interface ICocktailsProps {
  cocktails: ICocktail []
}

export default function Cocktails({cocktails}: ICocktailsProps) {
  return (
    <>
      <Head>
        <title>Коктейли</title>
      </Head>
      <Typography.Title title={'h1'}>
        Коктейли
      </Typography.Title>
      <Row gutter={16}>
        {cocktails.map((cocktail) => (
          <Col span={8} key={cocktail.sys.id}>
            <Link href={`cocktails/${cocktail.sys.id}`}>
              <Card
                hoverable
                title={cocktail.fields.name}
                cover={<img alt="example" src={cocktail.fields.picture?.fields.file.url} />}
                className={styles.card}
                extra={<a href={`cocktails/${cocktail.sys.id}`}>читать</a>}
              >
                <Meta
                  description={documentToReactComponents(cocktail.fields.history!)}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export async function getStaticProps() {
  const cocktails = await client.getEntries({
    content_type: 'cocktail'
  })
  return {
    props: {
      cocktails: cocktails.items,
    },
  }
}