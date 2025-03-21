"use client"

import { Faq } from "@/sections/Faq";
import { Gap } from "@/components/Gap";
import { MainHero } from "@/sections/MainHero";
import { OurServices } from "@/sections/OurServices";
import { OurWorks } from "@/sections/OurWorks";
import { Reasons } from "@/sections/Reasons";
import { Successes } from "@/sections/Successes";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { Cta } from "@/sections/Cta";
import { Follow } from "@/sections/Follow";

export default function Home() {
  return (
    <Col span={24}>
      <Gap>
        <MainHero/>
        <Successes/>
        <Reasons/>
        <OurServices/>
        <OurWorks/>
        <Testimonials/>
        <Faq/>
        <Cta/>
        <Follow/>
      </Gap>
    </Col>
  );
}
