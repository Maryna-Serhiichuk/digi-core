import { FC } from "react";
import { Col, Flex, Row, Typography } from "antd";
import styled from "@emotion/styled";
import { ContainerBg } from "@/components/ContainerBg";
import { Picture } from "@/components/Picture";
import { Padding } from "@/components/Padding";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { responsiveSize } from "@/utils/responsiveSize";
import { ArticlePreviewArgs } from ".";

const PictureView = styled(Row)`
    ${responsiveSize('height', 380, 200, 200)}
`

export const ArticlePreviewShort: FC<ArticlePreviewArgs> = ({ illustration, title, category, readTime, author, contain }) => {
    return <ContainerBg xs={24} sm={24} md={12} lg={8}>
        <PictureView>
            <Picture {...illustration}/>
        </PictureView>
        <Row>
            <Padding inlineSize={'small'} blockSize={'middle'}>
                <Col span={24}>
                    <Flex vertical gap={50}>
                        <Flex vertical gap={12}>
                            <Row>
                                <Typography.Title level={3}>
                                    {title}
                                </Typography.Title>
                            </Row>
                            <Row>
                                <Typography.Title level={5}>
                                    {contain?.slice(0, 150)}...
                                </Typography.Title>
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
        </Row>
    </ContainerBg>
}