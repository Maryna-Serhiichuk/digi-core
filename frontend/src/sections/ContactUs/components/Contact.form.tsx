import { Padding } from "@/components/Padding";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { FC } from "react";

export const ContactForm: FC = () => {
    return <Padding inlineSize={'small'} blockSize={'small'}>
        <Col span={24}>
            <Form requiredMark={false} layout={'vertical'} onFinish={e => console.log(e)}>
                <Row gutter={[16,0]}>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item label={'First Name'} name={'firstName'} rules={[{ required: true }]}>
                            <Input placeholder={'Enter First Name'} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item label={'Last Name'} name={'lastName'} rules={[{ required: true }]}>
                            <Input placeholder={'Enter Last Name'}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 0]}>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item label={'Email'} name={'email'} rules={[{ type: 'email', required: true }]}>
                            <Input placeholder={'email@gmail.com'}  />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item label={'Number'} name={'number'}>
                            <Input placeholder={'+1867390563'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24}>
                        <Form.Item label={'Message'} name={'message'} rules={[{ required: true }]}>
                            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }} placeholder={'Enter your Message'}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'space-between'} align={'middle'}>
                    <Col>
                        <Form.Item name={'agreement'} valuePropName={'checked'} rules={[{ required: true }]}>
                            <Checkbox>
                                I agree with Terms of Use and Privacy Policy
                            </Checkbox>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Button htmlType={'submit'} type={'primary'}>
                            Send Your Message
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Padding>
}