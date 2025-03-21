import { Padding } from "@/components/Padding";
import { Col, Row, Typography } from "antd";
import Link from "next/link";
import { FC } from "react";

export const Info: FC = () => {
    return <Padding inlineSize={'middle'} blockSize={'middle'}>
        <Col span={24}>
            <Row gutter={[50, 20]} justify={'space-between'}>
                <Col>
                    <Typography.Title level={5}>
                        © 2025 DigiCore. All rights reserved.
                    </Typography.Title>
                </Col>
                <Col>
                    <Row gutter={[25, 0]}>
                        <Col>
                            <Link href={'/terms'}>
                                <Typography.Title level={5}>
                                    Terms & Conditions
                                </Typography.Title>
                            </Link>
                        </Col>
                        <Col>
                            <Link href={'/privacy-policy'}>
                                <Typography.Title level={5}>
                                    Privacy Policy
                                </Typography.Title>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Padding>
}