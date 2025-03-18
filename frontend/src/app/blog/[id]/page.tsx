"use client"

import { Gap } from "@/components/Gap";
import { Cta } from "@/sections/Cta";
import { Faq } from "@/sections/Faq";
import { Follow } from "@/sections/Follow";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { HeroArticle } from "./(components)/HeroArticle";
import { useEffect, useState } from "react";
import { articles } from "@/data/articles";

export default function Article({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState<HeroArticleArgs>()
    
    useEffect(() => {
        const articleInfo = articles?.find(article => article?.id === params?.id)
        params?.id && setArticle({ 
            category: articleInfo?.category,
            readTime: articleInfo?.readTime,
            published: articleInfo?.published,
            author: articleInfo?.author
        })
    }, [params])

    return (
      <Col span={24}>
        <Gap>
          <HeroArticle {...article}/>
          <Testimonials/>
          <Faq/>
          <Cta/>
          <Follow/>
        </Gap>
      </Col>
    );
  }
  