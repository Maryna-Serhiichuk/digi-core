'use client'

import { FC } from "react";
import header from '@/data/header.json'
import { Button, Col, Row, Typography } from "antd";
import { Logo } from "../Logo";
import Link from "next/link";
import { MenuOutlined } from '@ant-design/icons';
import { ContainerBg } from "../ContainerBg";

export const Header: FC = () => {
    return <ContainerBg>
        <Row wrap={false} align={'middle'} justify={'space-between'} style={{ width: '100%', padding: '24px 50px' }}>
                <Col>
                    <Logo/>
                </Col>
                <Col md={0}>
                    <Button>
                        <MenuOutlined />
                    </Button>
                </Col>
                <Col>
                    <Row gutter={[16, 0]} align={'middle'} wrap={false}>
                        {header?.map(button => (
                            <Col key={button.label}>
                                <Link href={button?.link}>
                                    <Button type={'default'}>
                                        {button?.label}
                                    </Button>
                                </Link>
                            </Col>
                        ))}
                        <Col>
                            <Link href={'/'}>
                                <Button type={'primary'}>
                                    Contact us
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </ContainerBg>
}