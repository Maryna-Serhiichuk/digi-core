"use client"

import { Faq } from "@/sections/Faq";
import { Gap } from "@/components/Gap";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { Cta } from "@/sections/Cta";
import { Follow } from "@/sections/Follow";
import { HeroProjects } from "./(components)/HeroProjects";
import { OurWorks } from "@/sections/OurWorks";
import { Features } from "@/sections/Features";

export default function Projects() {
  return (
    <Col span={24}>
      <Gap>
        <HeroProjects/>
        <Features/>
        <OurWorks/>
        <Testimonials/>
        <Faq/>
        <Cta/>
        <Follow/>
      </Gap>
    </Col>
  );
}
