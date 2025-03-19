"use client"

import { Gap } from "@/components/Gap";
import { Cta } from "@/sections/Cta";
import { Faq } from "@/sections/Faq";
import { Follow } from "@/sections/Follow";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { HeroArticle } from "./(components)/HeroArticle";
import { useEffect, useState } from "react";
import { articles } from "@/data/articles/articles";
import { Article } from "@/sections/Article";
import { ArticleType } from "@/data/articles";

export default function Page({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState<ArticleType>()
    
    useEffect(() => {
        params?.id && setArticle(articles?.find(article => article?.id === params?.id))
    }, [params])

    return (
      <Col span={24}>
        <Gap>
          <HeroArticle article={article}/>
          <Article data={article}/>
          <Testimonials/>
          <Faq/>
          <Cta/>
          <Follow/>
        </Gap>
      </Col>
    );
  }
  