import { Padding } from "@/components/Padding";
import { Button, Col, Divider, Row, Space, Typography } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";
import { AskForm } from "./Ask.form";


const Line = styled(Divider)`
    ${responsiveSize('margin-top', 50, 40, 30)}
    ${responsiveSize('margin-bottom', 50, 40, 30)}
`

export const Ask: FC = () => {
    return <Padding inlineSize={'large'} blockSize={'middle'}>
        <Col span={24}>
            <Row style={{ width: '100%' }}>
                <Typography.Title level={3}>
                    Ask Your Question
                </Typography.Title>
            </Row>
            <Line/>
            <Space size={50} direction={'vertical'} style={{ width: '100%' }}>
                <Row>
                    <Col span={24}>
                        <AskForm/>
                    </Col>
                </Row>
                <Row>
                    <Button type={'primary'} block>
                        Send your message
                    </Button>
                </Row>
            </Space>
        </Col>
    </Padding>
}