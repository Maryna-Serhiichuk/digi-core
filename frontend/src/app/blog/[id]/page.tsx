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
import { Related } from "@/sections/Related";

export default function Page({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState<ArticleType>()
    const [relatedArticles, setRelatedArticles] = useState<Array<ArticleType>>()

    useEffect(() => {
        const coosen = articles?.find(art => art?.id === params?.id)
        params?.id && setArticle(coosen)

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
  