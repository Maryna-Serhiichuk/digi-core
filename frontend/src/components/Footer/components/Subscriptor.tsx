import { Padding } from "@/components/Padding";
import { Col, Form, Input, Row, Space, Typography } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import { ArrowCircle } from "@/components/ArrowCircle";

const Email = styled(Input)`
    border-radius: 0;
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-color: rgb(54, 54, 54);
`

const Item = styled(Form.Item)`
    margin: 0;
    max-width: 100%;
    width: 350px;
`

export const Subscriptor: FC = () => {
    return <Padding inlineSize={'middle'} blockSize={'small'}>
        <Col span={24}>
            <Row justify={'space-between'}>
                <Col>
                    <Space size={15} direction={'vertical'}>
                        <Row>
                            <Typography.Title level={4}>
                                Newsletter
                            </Typography.Title>
                        </Row>
                        <Row>
                            <Typography.Title level={3}>
                                Subscribe To our Newsletter
                            </Typography.Title>
                        </Row>
                    </Space>
                </Col>
                <Col>
                    <Row wrap={false} gutter={[15, 0]} align={'middle'} justify={'space-between'}>
                        <Col>
                            <Form>
                                <Item>
                                    <Email/>
                                </Item>
                            </Form>
                        </Col>
                        <Col>
                            <ArrowCircle color={'ghost'}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Padding>
}