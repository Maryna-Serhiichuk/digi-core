import { FC } from "react";
import { Col, Flex } from "antd";
import { Hero } from "@/components/Hero";
import { Padding } from "@/components/Padding";
import { Badge, BadgeArgs } from "@/components/Badge";
import { dateFormater } from "@/utils/dateFormater";
import { ArticleType } from "@/data/articles";

export const HeroArticle: FC<{ article: ArticleType | undefined }> = ({ article }) => {
    const articleDescription: Array<BadgeArgs> = [
        { name: 'Author', value: article?.author?.fullName },
        { name: 'Published', value: dateFormater(article?.published) },
        { name: 'Category', value: article?.category },
        { name: 'Read Time', value: article?.readTime },
    ]?.filter(it => it?.value)

    return <Hero
        withoutLine
        title={article?.title}
    >
        <Padding inlineSize={'small'} blockSize={'small'}>
            <Col span={24}>
                <Flex vertical gap={16}>
                    {articleDescription?.map(item => (
                        <Badge key={item?.name} {...item} />
                    ))}
                </Flex>
            </Col>
        </Padding>
    </Hero>
}