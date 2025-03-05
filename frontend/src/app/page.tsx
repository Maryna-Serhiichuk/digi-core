"use client"

import { Gap } from "@/components/Gap";
import { MainHero } from "@/sections/MainHero";
import { Reasons } from "@/sections/Reasons";
import { Successes } from "@/sections/Successes";
import { Col } from "antd";

export default function Home() {
  return (
    <Col span={24}>
      <Gap>
        <MainHero/>
        <Successes/>
        <Reasons/>
      </Gap>
    </Col>
  );
}
