import { Padding } from "@/components/Padding";
import { Button, Col, Form, Input, Row, Space, Typography } from "antd";
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

const DefaultButton = styled('button')`
    background: transparent;
    border: none;
    cursor: pointer;
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
                    <Form onFinish={e => console.log(e)}>
                        <Row wrap={false} gutter={[15, 0]} align={'middle'} justify={'space-between'}>
                            <Col>
                                <Item name={'email'} rules={[{ type: 'email', required: true }]}>
                                    <Email placeholder={'your.email@gmail.com'}/>
                                </Item>
                            </Col>
                            <Col>
                                <DefaultButton type={'submit'}>
                                    <ArrowCircle color={'ghost'}/>
                                </DefaultButton>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    </Padding>
}