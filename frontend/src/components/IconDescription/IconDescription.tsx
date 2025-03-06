import { FC } from "react";
import { Col, Grid, Row, Space, Typography } from "antd";
import styled from "@emotion/styled"
import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { responsiveSize } from "@/utils/responsiveSize";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { IconSquareLabel, IconSquareLabelArgs } from "@/components/IconSquareLabel";

export interface IconDescriptionArgs extends IconSquareLabelArgs {
    title: string
    description: string
    price: string
}

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
                            <IconSquareLabel icon={icon} title={title}/>
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