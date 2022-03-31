import React, { useState } from 'react';

import { Row, Col, Descriptions, Carousel, Calendar, Image } from 'antd';

const Home: React.FC = () => {
  const [carouselList, setCarouselList] = useState([
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic119.huitu.com%2Fres%2F20190505%2F748431_20190505143417303018_1.jpg&refer=http%3A%2F%2Fpic119.huitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637131612&t=7bd7b5403f985758caffd5ec07a4ff63',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic122.huitu.com%2Fres%2F20190609%2F549219_20190609154625776070_1.jpg&refer=http%3A%2F%2Fpic122.huitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637131586&t=107248f3c3833f4dcce528516e869b63',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic119.huitu.com%2Fres%2F20190504%2F748431_20190504160729724015_1.jpg&refer=http%3A%2F%2Fpic119.huitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637131539&t=382be655dc4df43dedace2596779f378',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp141481003.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637131428&t=fd0d0d9b006fe8040816133b0f0df4e5',
  ]);

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Descriptions layout="vertical" bordered column={3} style={{ marginBottom: 25 }}>
          <Descriptions.Item label="用户名">myp</Descriptions.Item>
          <Descriptions.Item label="性别">男</Descriptions.Item>
          <Descriptions.Item label="年龄">22</Descriptions.Item>
          <Descriptions.Item label="联系方式">17671812132</Descriptions.Item>
          <Descriptions.Item label="备注">超级管理员</Descriptions.Item>
          <Descriptions.Item label="联系地址">湖北省丹江口市</Descriptions.Item>
        </Descriptions>
        <Carousel>
          {carouselList.map((item) => (
            <Image src={item} key={item} />
          ))}
        </Carousel>
      </Col>
      <Col span={12}>
        <Calendar />
      </Col>
    </Row>
  );
};

export default Home;
