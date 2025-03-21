import { FC } from "react";
import { Row, Col, Typography, Grid } from "antd";
import { StartButton } from "@/components/StartButton";

export interface HeadArgs {
    subtitle?: string
    title?: string
}

export const Head: FC<HeadArgs> = ({ subtitle, title }) => {
    const { xl } = Grid.useBreakpoint()
    return <Col>
        <Row gutter={[20, 0]}>
            <Col>
                <Typography.Title level={1}>
                    {title?.split(' ', 3)?. join(' ')?.replaceAll('*', '') ?? ''}
                </Typography.Title>
            </Col>
            <Col hidden={!xl}>
                <StartButton/>
            </Col>
        </Row>
        {title?.split(' ')?.slice(3)?.join(' ') &&
            <Row>
                <Typography.Title level={1}>
                    {title?.split(' ')?.slice(3)?.join(' ')}
                </Typography.Title>
            </Row>
        }
        <Row style={{ paddingBottom: 20 }}>
            <Col hidden={xl}>
                <StartButton/>
            </Col>
        </Row>
        {subtitle &&
            <Row>
                <Typography.Title level={4}>
                    {subtitle}
                </Typography.Title>
            </Row>
        } 
    </Col>
}