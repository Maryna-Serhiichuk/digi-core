import { ContainerBg } from "@/components/ContainerBg";
import { Picture } from "@/components/Picture";
import { FC, Fragment } from "react";
import styled from "@emotion/styled"
import { Col, Flex, Row, Typography } from "antd";
import { responsiveSize } from "@/utils/responsiveSize";
import { Markdown } from "@/components/Markdown";
import { Padding } from "@/components/Padding";
import { Gap } from "@/components/Gap";
import { Member } from "@/components/Member";
import { ArticleType } from "@/data/articles";

const Illustration = styled(Row)`
    ${responsiveSize('height', 600, 600, 240)}
`

export const Article: FC<{ data: ArticleType | undefined }> = ({ data }) => {
    return <Fragment>
        <ContainerBg span={24}>
            <Illustration>
                <Picture {...data?.illustration} />
            </Illustration>
        </ContainerBg>
        <Col span={24}>
            <Gap>
                <Col span={3}>
                    
                </Col>
                <ContainerBg span={14}>
                    <Padding inlineSize={'middle'} blockSize={'small'}>
                        <Markdown data={data?.contain}/>
                    </Padding>
                </ContainerBg>
                <Col span={7}>
                    <Row>
                        <ContainerBg span={24}>
                            <Padding inlineSize={'small'} blockSize={'small'}>
                                <Flex vertical gap={20}>
                                    <Row>
                                        <Member data={data?.author} />
                                    </Row>
                                    {data?.comment &&
                                        <Row>
                                            <Typography.Title level={5}>
                                                {data?.comment}
                                            </Typography.Title>
                                        </Row>
                                    }
                                </Flex>
                            </Padding>
                        </ContainerBg>
                    </Row>
                </Col>
            </Gap>
        </Col>
    </Fragment>
}