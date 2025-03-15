import { Button, Col, Row, Space, Typography } from "antd";
import { FC, useState } from "react";
import styled from "@emotion/styled"
import { Gap } from "../Gap";
import { ContainerBg } from "../ContainerBg";
import { Padding } from "../Padding";

type TabArgs = {
    label: string
    text: string
}

interface TabsArgs {
    source: TabArgs[]
}

const Span = styled('span')`
    color: rgba(255,255,255,.5);
    font-weight: 400;
`

const Title = styled(Typography.Title)`
    && {
        letter-spacing: 2px;
        font-weight: 400;
    }
`

export const Tabs: FC<TabsArgs> = ({ source }) => {
    const [activeKey, setActivekey] = useState(0)
    return <Row>
        <Col span={24}>
            <Gap>
                <Col>
                    <Row>
                        <Gap>
                            {source?.map((it, i) => (
                                <Col key={it?.label}>
                                    <Button type={activeKey === i ? 'primary' :'default'} ghost={activeKey !== i} onClick={() => setActivekey(i)}>
                                        <Span>{it?.label}</Span>
                                    </Button>
                                </Col>
                            ))}
                        </Gap>
                    </Row>
                </Col>
                <ContainerBg span={24}>
                    <Padding inlineSize={'small'} blockSize={'small'}>
                        <Space size={20} direction={'vertical'} style={{ width: '100%' }}>
                            <Row>
                                <Title level={2}>
                                    {source[activeKey]?.label}
                                </Title>
                            </Row>
                            <Row>
                                <Typography.Title level={5}>
                                    {source[activeKey]?.text}
                                </Typography.Title>
                            </Row>
                        </Space>
                    </Padding>
                </ContainerBg>
            </Gap>
        </Col>
    </Row>
}