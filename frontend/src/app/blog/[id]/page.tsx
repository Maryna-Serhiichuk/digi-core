"use client"

import { Gap } from "@/components/Gap";
import { Cta } from "@/sections/Cta";
import { Faq } from "@/sections/Faq";
import { Follow } from "@/sections/Follow";
import { Testimonials } from "@/sections/Testimonials";
import { Col } from "antd";
import { HeroArticle } from "./(components)/HeroArticle";
import { use, useEffect, useState } from "react";
import { articles } from "@/data/articles/articles";
import { Article } from "@/sections/Article";
import { ArticleType } from "@/data/articles";
import { Related } from "@/sections/Related";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [article, setArticle] = useState<ArticleType>()
    const [relatedArticles, setRelatedArticles] = useState<Array<ArticleType>>()

    useEffect(() => {
      const coosen = articles?.find(art => art?.id === id)
      setArticle(coosen)

      setRelatedArticles(articles?.filter(art => art?.category === coosen?.category))
    }, [params])

    return (
      <Col span={24}>
        <Gap>
          <HeroArticle article={article}/>
          <Article data={article}/>
          <Related articles={relatedArticles}/>
          <Testimonials/>
          <Faq/>
          <Cta/>
          <Follow/>
        </Gap>
      </Col>
    );
  }
  