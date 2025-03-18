import { FC } from "react";
import { Col, Flex } from "antd";
import { Hero } from "@/components/Hero";
import { Padding } from "@/components/Padding";
import { Badge, BadgeArgs } from "@/components/Badge";
import { dateFormater } from "@/utils/dateFormater";

export const HeroArticle: FC<HeroArticleArgs> = ({ author, published, category, readTime }) => {
    const articleDescription: Array<BadgeArgs> = [
        { name: 'Author', value: author },
        { name: 'Published', value: dateFormater(published) },
        { name: 'Category', value: category },
        { name: 'Read Time', value: readTime },
    ]

    return <Hero
        withoutLine
        titleLine1={'Mastering the Art'}
        titleLine2={'of Minimalistic Design'}
    >
        <Padding inlineSize={'small'} blockSize={'small'}>
            <Col span={24}>
                <Flex vertical gap={16}>
                    {articleDescription?.map(item => (
                        <Badge {...item} />
                    ))}
                </Flex>
            </Col>
        </Padding>
    </Hero>
}