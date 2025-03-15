"use client"

import { Faq } from "@/sections/Faq";
import { Gap } from "@/components/Gap";
import { OurServices } from "@/sections/OurServices";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { Cta } from "@/sections/Cta";
import { Follow } from "@/sections/Follow";
import { HeroSections } from "./(components)/HeroServices";

export default function Home() {
  return (
    <Col span={24}>
      <Gap>
        <HeroSections/>

        <OurServices images/>

        <Testimonials/>
        <Faq/>
        <Cta/>
        <Follow/>
      </Gap>
    </Col>
  );
}
