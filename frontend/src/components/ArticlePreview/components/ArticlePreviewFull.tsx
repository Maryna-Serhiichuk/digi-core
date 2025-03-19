import { FC, Fragment } from "react";
import { Col, Flex, Row, Space, Typography } from "antd";
import styled from "@emotion/styled";
import { ContainerBg } from "@/components/ContainerBg";
import { Picture } from "@/components/Picture";
import { Padding } from "@/components/Padding";
import { Tag } from "@/components/Tag";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { ArticlePreviewArgs } from ".";
import { dateFormater } from "@/utils/dateFormater";

const SpaceBetween = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`

export const ArticlePreviewFull: FC<ArticlePreviewArgs> = ({ illustration, title, category, readTime, author, contain, published }) => {
    return <Fragment>
        <ContainerBg span={8}>
            <Picture {...illustration}/>
        </ContainerBg>
        <ContainerBg span={16}>
            <Padding inlineSize={'middle'} blockSize={'middle'}>
                <SpaceBetween span={24}>
                    <Flex vertical gap={20}>
                        <Row>
                            <Typography.Title level={3}>
                                {title}
                            </Typography.Title>
                        </Row>
                        <Row gutter={[20, 20]}>
                            <Tag name={'Category'} value={category} />
                            <Tag name={'Read Time'} value={readTime} />
                            <Tag name={'Author'} value={author?.fullName} />
                        </Row>
                    </Flex>
                    <Row>
                        <Typography.Text>
                            {contain?.slice(0, 300)}...
                        </Typography.Text>
                    </Row>
                    <Row align={'middle'} justify={'space-between'}>
                        <Col>
                            <DarkArrowButton color={'ghost'}>
                                Read Full Article
                            </DarkArrowButton>
                        </Col>
                        <Col>
                            <Space size={12}>
                                    <Typography.Text>
                                        Published Date
                                    </Typography.Text>
                                    <Date>
                                        {dateFormater(published)}
                                    </Date>
                            </Space>
                        </Col>
                    </Row>
                </SpaceBetween>
            </Padding>
        </ContainerBg>
    </Fragment>
}