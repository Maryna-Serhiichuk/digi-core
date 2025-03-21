import { FC } from "react";
import { Button, Col, Form, Input, Row, Space } from "antd";

export const AskForm: FC = () => {
    return <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        colon={false}
        layout={'vertical'}
        onFinish={e => console.log(e)}
        requiredMark={false}
    >
        <Space size={50} direction={'vertical'} style={{ width: '100%' }}>
            <Row>
                <Col span={24}>
                    <Form.Item name={'name'} label={'Name'} rules={[{ required: true }]}>
                        <Input autoComplete={'off'} placeholder={'Enter your name'}/>
                    </Form.Item>
                    <Form.Item name={'email'} label={'Email'} rules={[{ type: 'email', required: true }]}>
                        <Input placeholder={'Enter your email'}/>
                    </Form.Item>
                    <Form.Item name={'question'} label={'Your question'} rules={[{ required: true }]}>
                        <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }} placeholder={'Enter your question here . . . . . . . . . .'}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Button type={'primary'} block htmlType={'submit'}>
                    Send your message
                </Button>
            </Row>
        </Space>
    </Form>
}