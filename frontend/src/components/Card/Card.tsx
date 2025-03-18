import { FC } from "react";
import { Col, Row, Typography } from "antd";
import styled from "@emotion/styled"
import { ContainerBg, ContainerBgArgs } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";

interface CardArgs extends ContainerBgArgs {
    subtitle: string
    title: string
    description: string
}

const Title = styled(Row)`
    background: ${({ theme }: any) => theme?.token?.colors?.dark[15]};
`

export const Card: FC<CardArgs> = ({ subtitle, title, description, ...containerArgs }) => {
    return  <ContainerBg {...containerArgs}>
        <Row>
            <Col span={24}>
                <Padding inlineSize={'small'} blockSize={20}>
                    <Typography.Title level={4}>
                        {subtitle}
                    </Typography.Title>
                </Padding>
                <Title>
                    <Padding inlineSize={'small'} blockSize={'small'}>
                        <Typography.Title level={3}>
                            {title}
                        </Typography.Title>
                    </Padding>
                </Title>
                <Padding inlineSize={'small'} blockSize={'small'}>
                    <Typography.Title level={5}>
                        {description}
                    </Typography.Title>
                </Padding>
            </Col>
        </Row>
    </ContainerBg>
}