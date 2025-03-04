import { FC } from "react";
import { Row, Col, Typography, Grid } from "antd";
import { StartButton } from "@/components/StartButton";

export const Hero: FC = () => {
    const { xl } = Grid.useBreakpoint()
    return <Col>
        <Row gutter={[20, 0]}>
            <Col>
                <Typography.Title level={1}>
                    Digital Solutions
                </Typography.Title>
            </Col>
            <Col hidden={!xl}>
                <StartButton/>
            </Col>
        </Row>
        <Row>
            <Typography.Title level={1}>
                That Drive Success
            </Typography.Title>
        </Row>
        <Row style={{ paddingBottom: 20 }}>
            <Col hidden={xl}>
                <StartButton/>
            </Col>
        </Row>
        <Row>
            <Typography.Title level={4}>
                At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.
            </Typography.Title>
        </Row>
    </Col>
}