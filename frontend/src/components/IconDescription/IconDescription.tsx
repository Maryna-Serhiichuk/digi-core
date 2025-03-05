import { StaticImageData } from "next/image";
import { FC } from "react";
import { Col, Grid, Row, Space, Typography } from "antd";
import Image from "next/image";
import styled from "@emotion/styled"
import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { responsiveSize } from "@/utils/responsiveSize";
import { DarkArrowButton } from "@/components/DarkArrowButton";

export interface IconDescriptionArgs {
    icon: StaticImageData
    title: string
    description: string
    price: string
}

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

export const IconDescription: FC<IconDescriptionArgs> = ({ icon, title, description, price }) => {
    const { sm, xl } = Grid.useBreakpoint()

    return <ContainerBg xs={24} md={12}>
        <Padding inlineSize={'large'} blockSize={80}>
            <SpaceBetween direction={'vertical'}>
                <SpaceBetween direction={'vertical'}>
                    <Row justify={'space-between'} wrap={false} style={{ width: '100%' }}>
                        <Col>
                            <Row align={'middle'} wrap={false}>
                                <ImageRec>
                                    <Image src={icon} alt={title + "icon"} />
                                </ImageRec>
                                <Col>
                                    <Typography.Title level={3}>
                                        {title}
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
                            {description}
                        </Typography.Title>
                    </Row>
                </SpaceBetween>
                <Row justify={sm ? 'end' : 'start'}>
                    {!sm
                        ? <DarkArrowButton>
                            Learn More
                        </DarkArrowButton>
                        : <Typography.Title level={3}>
                            {price}
                        </Typography.Title>
                    }
                </Row>
            </SpaceBetween>
        </Padding>
    </ContainerBg>
}