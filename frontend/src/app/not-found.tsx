'use client'

import { Button, Col, Flex, Row, Typography } from "antd";
import styled from "@emotion/styled"
import Tag from '@/components/Icons/TagBlock'
import Link from "next/link";
import { responsiveSize } from "@/utils/responsiveSize";

const Padding = styled(Col)`
    display: flex;
    justify-content: center;
    color: ${({ theme }: any) =>  theme?.token?.colors?.primary[60]};
    ${responsiveSize('padding', 120, 80, 50)}
`

const Text = styled(Col)`
    line-height: .9;
    ${responsiveSize('font-size', 100, 70, 50)}
`

const Number = styled(Text)`
    transform: translateY(-15px);
    ${responsiveSize('font-size', 200, 140, 100)}
`

const Icon = styled(Col)`
    svg {
        ${responsiveSize('width', 150, 100, 70)}
        ${responsiveSize('height', 150, 100, 70)}
        fill: ${({ theme }: any) =>  theme?.token?.colors?.primary[60]};
    }
`

export default function NotFound() {
    return <Padding span={24}>
        <Col xs={24} sm={24} md={16} lg={12} xl={10}>
            <Flex vertical gap={60}>
                <Flex vertical>
                    <Flex gap={6} align={'center'} justify={'center'}>
                        <Number>
                            4
                        </Number>
                        <Icon>
                            <Tag width={150} height={150} />
                        </Icon>
                        <Number>
                            4
                        </Number>
                    </Flex>
                    <Flex justify={'center'}>
                        <Text>
                            Not Found
                        </Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Col span={24}>
                        <Link href={'/'}>
                            <Button block ghost>
                                Go Home
                            </Button>
                        </Link>
                    </Col>
                </Flex>
            </Flex>
        </Col>
    </Padding>
}