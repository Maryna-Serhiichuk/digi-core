import { Form, Input } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"

const Item = styled(Form.Item)`
    text-transform: uppercase;
    letter-spacing: 2px;
`

export const AskForm: FC = () => {
    return <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        colon={false}
        layout={'vertical'}
    >
        <Item name={'name'} label={'Name'}>
            <Input autoComplete={'off'} placeholder={'Enter your name'}/>
        </Item>
        <Item name={'email'} label={'Email'} rules={[{ type: 'email' }]}>
            <Input placeholder={'Enter your email'}/>
        </Item>
        <Item name={'question'} label={'Your question'}>
            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }} placeholder={'Enter your question here . . . . . . . . . .'}/>
        </Item>
    </Form>
}