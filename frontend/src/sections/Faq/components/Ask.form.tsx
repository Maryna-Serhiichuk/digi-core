import { Form, Input } from "antd";
import { FC } from "react";

export const AskForm: FC = () => {
    return <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        colon={false}
        layout={'vertical'}
    >
        <Form.Item name={'name'} label={'Name'}>
            <Input autoComplete={'off'} placeholder={'Enter your name'}/>
        </Form.Item>
        <Form.Item name={'email'} label={'Email'} rules={[{ type: 'email' }]}>
            <Input placeholder={'Enter your email'}/>
        </Form.Item>
        <Form.Item name={'question'} label={'Your question'}>
            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }} placeholder={'Enter your question here . . . . . . . . . .'}/>
        </Form.Item>
    </Form>
}