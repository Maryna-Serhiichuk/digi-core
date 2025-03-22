'use client'

import { Button, Col, Flex, Row, Typography } from "antd";
import styled from "@emotion/styled"
import Tag from '@/components/Icons/TagBlock'
import Link from "next/link";

const Padding = styled(Col)`
    display: flex;
    justify-content: center;
    color: ${({ theme }: any) =>  theme?.token?.colors?.primary[60]};
    padding: 120px;
`

const Text = styled(Col)`
    line-height: .9;
    font-size: 100px;
`

const Number = styled(Text)`
    font-size: 200px;
    transform: translateY(-15px);
`

const Icon = styled(Col)`
    svg {
        fill: ${({ theme }: any) =>  theme?.token?.colors?.primary[60]};
    }
`

export default function NotFound() {
    return <Padding span={24}>
        <Col span={10}>
            <Flex vertical gap={60}>
                <Flex vertical>
                    <Flex gap={10} align={'center'} justify={'center'}>
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