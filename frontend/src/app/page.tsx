"use client"

import { Gap } from "@/components/Gap";
import { MainHero } from "@/sections/MainHero";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <Col span={24}>
      <Gap>
        <MainHero/>
      </Gap>
    </Col>
  );
}
