import { FC } from "react";
import { Col, Divider, Row, Typography } from "antd";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";
import { AskForm } from "./Ask.form";
import { Padding } from "@/components/Padding";


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
            <AskForm/>
        </Col>
    </Padding>
}