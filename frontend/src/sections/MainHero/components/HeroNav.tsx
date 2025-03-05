import { FC } from "react";
import { Row, Col, Typography } from "antd";
import styled from "@emotion/styled"
import { Picture } from "@/components/Picture";
import imgFull from '@/sources/view-blue/full.jpg'
import imgMiddle from '@/sources/view-blue/middle.jpg'

const ColStyled = styled(Col)`
    padding: 30px;

    .ant-typography {
        text-transform: uppercase;
    }
`

export const HeroNav: FC = () => {
    return <Row style={{ position: 'relative', height: '100%' }}>
        <Col style={{ display: 'flex', flexDirection: 'column' }}>
            <Row style={{ flex: '1 1 1px' }}>
                <Picture
                    full={imgFull}
                    middle={imgMiddle}
                    alt="site-layouts-view"
                />
            </Row>
            <Row style={{ flex: '0 0 100px' }}>
                <ColStyled>
                    <Typography.Title level={5}>
                        Estatein real estate
                    </Typography.Title>
                    <Typography.Text>
                        Web Development
                    </Typography.Text>
                </ColStyled>
            </Row>
        </Col>
    </Row>
}