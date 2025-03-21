import { Section } from "@/components/Section";
import { FC } from "react";
import styled from "@emotion/styled"
import awards from '@/data/awards.json'
import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { Col, Flex, Grid, Row, Typography } from "antd";
import Award from '@/components/Icons/Award'
import { Tag } from "@/components/Tag";
import { IconSquare } from "@/components/IconSquare";

const Title = styled(Row)`
    min-height: 100px;
`

export const Awards: FC = () => {
    const { lg, xl } = Grid.useBreakpoint()
    return <Section label={'Awards & Recognitions'}>
        {awards?.map(award => (
            <ContainerBg key={award?.title} xs={24} md={12} lg={6}>
                <Padding inlineSize={'small'} blockSize={'small'}>
                    <Col span={24}>
                        <Flex vertical gap={40}>
                            <Row wrap={false} align={'middle'} justify={'space-between'}>
                                <Col>
                                    <Tag name={(!lg) || (lg && xl) ? 'Date' : undefined} value={award?.date} />
                                </Col>
                                <Col>
                                    <IconSquare element={Award}/>
                                </Col>
                            </Row>
                            <Title>
                                <Typography.Title level={3}>
                                    {award?.title}
                                </Typography.Title>
                            </Title>
                        </Flex>
                        <Row>
                            <Typography.Title level={5}>
                                {award?.description}
                            </Typography.Title>
                        </Row>
                    </Col>
                </Padding>
            </ContainerBg>
        ))}
    </Section>
}