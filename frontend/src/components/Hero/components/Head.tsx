import { FC } from "react";
import { Row, Col, Typography, Grid } from "antd";
import { StartButton } from "@/components/StartButton";

export interface HeadArgs {
    titleLine1: string
    titleLine2?: string
    subtitle?: string
}

export const Head: FC<HeadArgs> = ({ titleLine1, titleLine2, subtitle }) => {
    const { xl } = Grid.useBreakpoint()
    return <Col>
        <Row gutter={[20, 0]}>
            <Col>
                <Typography.Title level={1}>
                    {titleLine1}
                </Typography.Title>
            </Col>
            <Col hidden={!xl}>
                <StartButton/>
            </Col>
        </Row>
        {titleLine2 &&
            <Row>
                <Typography.Title level={1}>
                    {titleLine2}
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