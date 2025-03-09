import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { Button, Col, Grid, Row, Typography } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import { ArrowUpOutlined } from '@ant-design/icons';

const Title = styled(Typography.Title)`
    && {
        color: ${({ theme }: any) => theme?.token?.colors?.dark['06']};
    }
`

const Description = styled(Typography.Text)`
    color: ${({ theme }: any) => theme?.token?.colors?.dark['06']};
`

export const Action: FC = () => {
    const { md } = Grid.useBreakpoint()
    return <ContainerBg background={'primary'}>
        <Padding inlineSize={'large'} blockSize={'middle'}>
            <Col span={24}>
                <Row gutter={[0, 20]} align={'middle'} justify={'space-between'}>
                    <Col xs={24} sm={24} md={16} lg={17} xl={15}>
                        <Title level={2}>
                            Ready to Transform Your Digital Presence?
                        </Title>
                        <Description>
                            Take the first step towards digital success with DigiCore by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.
                        </Description>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={7} xl={9}>
                        <Row justify={'end'}>
                            <Button block={!md} iconPosition={'end'} icon={<ArrowUpOutlined rotate={45} />}>
                                Get in Touch
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Padding>
    </ContainerBg>
}