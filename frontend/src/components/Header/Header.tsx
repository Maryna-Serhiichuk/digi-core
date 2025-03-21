'use client'

import { FC, useState } from "react";
import styled from "@emotion/styled"
import header from '@/data/header.json'
import { Button, Col, Drawer, Flex, Grid, Row } from "antd";
import { Logo } from "@/components/Logo";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { ContainerBg } from "@/components/ContainerBg";
import { responsiveSize } from "@/utils/responsiveSize";
import { NavLink } from "@/components/NavLink";

const HeaderPadding = styled(Row)`
    width: 100%;
    ${responsiveSize('padding-inline', 50, 30, 24)}
    padding-block: 24px;
`

const NavButton = styled(Button)`
    ${responsiveSize('padding', 24, 10, 10)}
`

export const Header: FC = () => {
    const { lg } = Grid.useBreakpoint()
    const [open, setOpen] = useState(false)

    return <ContainerBg>
        <HeaderPadding wrap={false} align={'middle'} justify={'space-between'}>
            <Col>
                <Logo/>
            </Col>
            <Col hidden={lg}>
                <Button onClick={() => setOpen(true)}>
                    <MenuOutlined />
                </Button>
                <Drawer placement={'left'} closeIcon={false} title={
                    <Row align={'middle'} justify={'space-between'}>
                        <Col>
                            <Logo/>
                        </Col>
                        <Col>
                            <Button onClick={() => setOpen(false)}>
                                <CloseOutlined />
                            </Button>
                        </Col>
                    </Row>
                } onClose={() => setOpen(false)} open={open}>
                    <Col span={24}>
                        <Flex gap={4} vertical>
                            {header?.map(button => (
                                <Row key={button?.label}>
                                    <NavLink href={button?.link}>
                                        <Button type={'link'}>
                                            {button?.label}
                                        </Button>
                                    </NavLink>
                                </Row>
                            ))}
                            <Row>
                                <NavLink href={'/contact'}>
                                    <Button type={'link'}>
                                        Contact us
                                    </Button>
                                </NavLink>
                            </Row>
                        </Flex>
                    </Col>
                </Drawer>
            </Col>
            <Col hidden={!lg}>
                <Row gutter={[16, 0]} align={'middle'} wrap={false}>
                    {header?.map(button => (
                        <Col key={button.label}>
                            <NavLink href={button?.link}>
                                <NavButton type={'default'}>
                                    {button?.label}
                                </NavButton>
                            </NavLink>
                        </Col>
                    ))}
                    <Col>
                        <NavLink href={'/contact'}>
                            <NavButton type={'primary'}>
                                Contact us
                            </NavButton>
                        </NavLink>
                    </Col>
                </Row>
            </Col>
        </HeaderPadding>
    </ContainerBg>
}