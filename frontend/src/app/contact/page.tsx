"use client"

import { Faq } from "@/sections/Faq";
import { Gap } from "@/components/Gap";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { Cta } from "@/sections/Cta";
import { Follow } from "@/sections/Follow";
import { HeroContact } from "./(components)/HeroContact";
import { ContactUs } from "@/sections/ContactUs";

export default function Page() {
  return (
    <Col span={24}>
      <Gap>
        <HeroContact/>
        <ContactUs/>
        <Testimonials/>
        <Faq/>
        <Cta/>
        <Follow/>
      </Gap>
    </Col>
  );
}
