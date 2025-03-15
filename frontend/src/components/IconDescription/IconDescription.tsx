import { FC, Fragment } from "react";
import { Col, Grid, Row, Space, Typography } from "antd";
import styled from "@emotion/styled"
import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { responsiveSize } from "@/utils/responsiveSize";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { IconSquareLabel, IconSquareLabelArgs } from "@/components/IconSquareLabel";
import { ImageButton, ImageButtonArgs } from "@/components/ImageButton";

export interface IconDescriptionArgs extends IconSquareLabelArgs {
    title: string
    description: string
    price: string
    image?: boolean
    images?: ImageButtonArgs[]
}

const ResponsiveSpace = styled(Space)`
    ${responsiveSize('gap', 50, 30, 20)}
`

const SpaceBetween = styled(ResponsiveSpace)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const IconDescription: FC<IconDescriptionArgs> = ({ icon, title, description, price, image, images }) => {
    const { sm, xl } = Grid.useBreakpoint()

    return <Fragment>
        <ContainerBg xs={24} md={24} lg={12}>
            <Padding inlineSize={image ? 'middle' : 'large'} blockSize={80}>
                <SpaceBetween direction={'vertical'}>
                    <SpaceBetween direction={'vertical'}>
                        <Row justify={'space-between'} wrap={false} style={{ width: '100%' }}>
                            <Col>
                                <IconSquareLabel icon={icon} title={title}/>
                            </Col>
                            <Col hidden={!sm}>
                                <DarkArrowButton color={'ghost'}>
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
                            ? <DarkArrowButton color={'ghost'}>
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
        {image &&
            <ContainerBg xs={0} md={0} lg={12}>
                <Padding inlineSize={image ? 'middle' : 'large'} blockSize={80}>
                    <SpaceBetween direction={'vertical'} style={{ width: '100%' }}>
                        <Row justify={'space-between'} wrap={false} style={{ width: '100%' }}>
                            <Col>
                                <Typography.Title level={3}>
                                    {title}
                                </Typography.Title>
                            </Col>
                            <Col>
                                <DarkArrowButton color={'ghost'}>
                                    View all
                                </DarkArrowButton>
                            </Col>
                        </Row>
                        <Row gutter={[20, 0]}>
                            {images?.map((img, i) => (
                                <Col key={i} span={12}>
                                    <ImageButton {...img}/>
                                </Col>
                            ))}
                        </Row>
                    </SpaceBetween>
                </Padding>
            </ContainerBg>
        }
    </Fragment>
}