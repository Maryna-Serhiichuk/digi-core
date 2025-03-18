"use client"

import { Faq } from "@/sections/Faq";
import { Gap } from "@/components/Gap";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { Cta } from "@/sections/Cta";
import { Follow } from "@/sections/Follow";
import { HeroSections } from "./(components)/HeroServices";
import { Jobs } from "@/sections/Jobs";

export default function Projects() {
  return (
    <Col span={24}>
      <Gap>
        <HeroSections/>
        <Jobs/>
        
        <Testimonials/>
        <Faq/>
        <Cta/>
        <Follow/>
      </Gap>
    </Col>
  );
}
