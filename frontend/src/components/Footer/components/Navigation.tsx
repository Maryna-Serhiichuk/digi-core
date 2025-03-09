'use client'

import { FC } from "react";
import { Col, Flex, Row, Space, Typography } from "antd";
import navigation from '@/data/footer-navigation.json'
import Link from "next/link";
import styled from "@emotion/styled"
import { Padding } from "@/components/Padding";

const Name = styled(Typography.Title)`
    && {
        letter-spacing: 1px;
        color: ${({ theme }: any) => theme?.token?.colors?.orange[90]};
    }
`

const Soon = styled(Row)`
    padding: 4px 12px;
    background: ${({ theme }: any) => theme?.token?.colors?.dark[15]};
    border: 1 px solid ${({ theme }: any) => theme?.token?.colors?.dark[20]};
    border-radius: 6px;
`

export const Navigation: FC = () => {
    return <Padding inlineSize={'middle'} blockSize={'middle'}>
        <Row gutter={[20, 40]}>
            {navigation?.map(section => (
                <Col key={section?.name} xs={12} sm={12} md={6}>
                    <Flex gap={'large'} vertical>
                        <Row>
                            <Name level={4}>
                                {section?.name}
                            </Name>
                        </Row>
                        <Row gutter={[0, 23]}>
                            {section?.links?.map(link => (
                                <Col key={link?.label} span={24}>
                                    <Space size={10}>
                                        <Link href={link?.link}>
                                            <Typography.Text>
                                                {link?.label}
                                            </Typography.Text>
                                        </Link>
                                        {!link?.link &&
                                            <Soon>
                                                <Typography.Text>
                                                    Soon
                                                </Typography.Text>
                                            </Soon>
                                        }
                                    </Space>
                                </Col>
                            ))}
                        </Row>
                    </Flex>
                </Col>
            ))}
        </Row>
    </Padding>
}