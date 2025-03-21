import { FC } from "react";
import { IconSquare, IconSquareArgs } from "../IconSquare";
import { ContainerBg } from "../ContainerBg";
import { Col, Flex, Row, Typography } from "antd";
import { Padding } from "../Padding";

interface FeatureArgs extends Omit<IconSquareArgs, 'alt'> {
    title: string
    description: string
}

export const Feature: FC<FeatureArgs> = ({ icon, description, title, ...iconProps }) => {
    return <ContainerBg xs={24} md={12} lg={6}>
        <Padding inlineSize={'small'} blockSize={'small'}>
            <Col span={24}>
                <Flex vertical gap={50}>
                    <Row>
                        <IconSquare {...iconProps}/>
                    </Row>
                    <Flex vertical gap={'middle'}>
                        <Row>
                            <Typography.Title level={3}>
                                {title}
                            </Typography.Title>
                        </Row>
                        <Row>
                            <Typography.Title level={5}>
                                {description}
                            </Typography.Title>
                        </Row>
                    </Flex>
                </Flex>
            </Col>
        </Padding>
    </ContainerBg>
}