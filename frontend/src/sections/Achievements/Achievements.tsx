import { Section } from "@/components/Section";
import { FC } from "react";
import styled from "@emotion/styled"
import achievements from '@/data/achievements.json'
import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { Col, Row, Typography } from "antd";

const Title = styled(Row)`
    background: ${({ theme }: any) => theme?.token?.colors?.dark[15]};
`

export const Achievements: FC = () => {
    return <Section label={'Our Achievements'}>
        {achievements?.map(achievement => (
            <ContainerBg key={achievement?.data} xs={24} md={12} lg={6}>
                <Row>
                    <Col span={24}>
                        <Padding inlineSize={'small'} blockSize={20}>
                            <Typography.Title level={4}>
                                {achievement?.data}
                            </Typography.Title>
                        </Padding>
                        <Title>
                            <Padding inlineSize={'small'} blockSize={'small'}>
                                <Typography.Title level={3}>
                                    {achievement?.title}
                                </Typography.Title>
                            </Padding>
                        </Title>
                        <Padding inlineSize={'small'} blockSize={'small'}>
                            <Typography.Title level={5}>
                                {achievement?.description}
                            </Typography.Title>
                        </Padding>
                    </Col>
                </Row>
            </ContainerBg>
        ))}
    </Section>
}