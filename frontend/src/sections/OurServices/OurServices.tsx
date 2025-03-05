import { FC } from "react";
import { Col, Grid, Row, Space, Typography } from "antd";
import Icon from '@ant-design/icons';
import Image from "next/image";
import { ContainerBg } from "@/components/ContainerBg";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { Padding } from "@/components/Padding";
import { Section } from "@/components/Section";
import { ourServices } from "@/data/our-services";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";

const ImageRec = styled(Col)`
    margin-right: 16px;
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark[12]};
    border: 1px solid ${({ theme }: any) =>  theme?.token?.colors?.dark[20]};
    ${responsiveSize('padding', 16, 14, 14)}
    ${responsiveSize('border-radius', 12, 10, 10)}
`

const ResponsiveSpace = styled(Space)`
    ${responsiveSize('gap', 50, 30, 20)}
`

const SpaceBetween = styled(ResponsiveSpace)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`



export const OurServices: FC = () => {
    const { sm, xl } = Grid.useBreakpoint()
    return <Section label={"Our Services"}>
        {ourServices?.map(service => (
            <ContainerBg xs={24} md={12}>
                <Padding inlineSize={'large'} blockSize={80}>
                    <SpaceBetween direction={'vertical'}>
                        <SpaceBetween direction={'vertical'}>
                            <Row justify={'space-between'} wrap={false} style={{ width: '100%' }}>
                                <Col>
                                    <Row align={'middle'} wrap={false}>
                                        <ImageRec>
                                            <Image src={service.icon} alt={service?.title + "icon"} />
                                        </ImageRec>
                                        <Col>
                                            <Typography.Title level={3}>
                                                {service?.title}
                                            </Typography.Title>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col hidden={!sm}>
                                    <DarkArrowButton>
                                        {xl ? 'Book a call' : ''}
                                    </DarkArrowButton>
                                </Col>
                            </Row>
                            <Row>
                                <Typography.Title level={5}>
                                    {service?.description}
                                </Typography.Title>
                            </Row>
                        </SpaceBetween>
                        <Row justify={sm ? 'end' : 'start'}>
                            {!sm
                                ? <DarkArrowButton>
                                    Learn More
                                </DarkArrowButton>
                                : <Typography.Title level={3}>
                                    {service?.price}
                                </Typography.Title>
                            }
                        </Row>
                    </SpaceBetween>
                </Padding>
            </ContainerBg>
        ))}
    </Section>
}