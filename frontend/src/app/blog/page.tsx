"use client"

import { Gap } from "@/components/Gap";
import { Articles } from "@/sections/Articles";
import { Cta } from "@/sections/Cta";
import { Faq } from "@/sections/Faq";
import { Follow } from "@/sections/Follow";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";

export default function Blog() {
    return (
      <Col span={24}>
        <Gap>
          <Articles/>
          <Testimonials/>
          <Faq/>
          <Cta/>
          <Follow/>
        </Gap>
      </Col>
    );
  }
  