import { FC } from "react";
import { Col, Flex, Row, Typography } from "antd";
import styled from "@emotion/styled";
import { ContainerBg } from "@/components/ContainerBg";
import { Picture } from "@/components/Picture";
import { Padding } from "@/components/Padding";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { responsiveSize } from "@/utils/responsiveSize";
import { ArticlePreviewArgs } from ".";
import { Markdown } from "@/components/Markdown";

const PictureView = styled(Row)`
    ${responsiveSize('height', 380, 200, 200)}
`

export const ArticlePreviewShort: FC<ArticlePreviewArgs> = ({ illustration, title, category, readTime, author, contain }) => {
    return <ContainerBg xs={24} sm={24} md={12} lg={8}>
        <PictureView>
            <Picture {...illustration}/>
        </PictureView>
        <Padding inlineSize={'small'} blockSize={'middle'}>
            <Col span={24}>
                <Flex vertical gap={50} justify={'space-between'} style={{ height: '100%' }}>
                    <Flex vertical gap={12}>
                        <Row>
                            <Typography.Title level={3}>
                                {title}
                            </Typography.Title>
                        </Row>
                        <Row>
                            <Markdown data={`${contain?.slice(0, 170)}...`} clear/>
                        </Row>
                    </Flex>
                    <Row>
                        <DarkArrowButton color={'ghost'}>
                            Read Full Article
                        </DarkArrowButton>
                    </Row>
                </Flex>
            </Col>
        </Padding>
    </ContainerBg>
}