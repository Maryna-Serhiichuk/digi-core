"use client"

import { Faq } from "@/sections/Faq";
import { Gap } from "@/components/Gap";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { Cta } from "@/sections/Cta";
import { Follow } from "@/sections/Follow";
import { HeroAbout } from "./(components)/HeroAbout";
import { OurWorks } from "@/sections/OurWorks";
import { Features } from "@/sections/Features";
import { Members } from "@/sections/Members";

export default function About() {
  return (
    <Col span={24}>
      <Gap>
        <HeroAbout/>
        <Members/>
        <Testimonials/>
        <Faq/>
        <Cta/>
        <Follow/>
      </Gap>
    </Col>
  );
}
