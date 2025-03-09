import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { Button, Col, Row, Typography } from "antd";
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
    return <ContainerBg background={'primary'}>
        <Padding inlineSize={'large'} blockSize={'middle'}>
            <Col span={24}>
                <Row align={'bottom'} justify={'space-between'}>
                    <Col span={15}>
                        <Title level={2}>
                            Ready to Transform Your Digital Presence?
                        </Title>
                        <Description>
                            Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.
                        </Description>
                    </Col>
                    <Col>
                        <Button iconPosition={'end'} icon={<ArrowUpOutlined rotate={45} />}>
                            Get in Touch
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Padding>
    </ContainerBg>
}