import { Col, Grid, Row, Space, Typography } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import { IconSquareLabel, IconSquareLabelArgs } from "@/components/IconSquareLabel";
import { ContainerBg, ContainerBgArgs } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { Tag } from "@/components/Tag";

interface ProjectHeadArgs extends IconSquareLabelArgs, ContainerBgArgs {
    tags: {
        key: string
        value: string
    }[],
    description?: string
}

const SpaceBetween = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
`


export const ProjectHead: FC<ProjectHeadArgs> = ({ tags, description, icon, title, ...containerProps }) => {
    const { xs } = Grid.useBreakpoint()

    return <ContainerBg {...containerProps}>
        <Padding inlineSize={'small'} blockSize={'middle'}>
            <SpaceBetween>
                <Row justify={'space-between'} wrap={false} style={{ width: '100%' }}>
                    <Col>
                        <IconSquareLabel icon={icon} title={title} />
                    </Col>
                    <Col hidden={xs}>
                        <DarkArrowButton color={'ghost'}>
                            Details
                        </DarkArrowButton>
                    </Col>
                </Row>
                <Row align={'middle'}>
                    <Space size={16} direction={'vertical'}>
                        {tags?.map(tag => (
                            <Tag name={tag?.key} value={tag?.value} />
                        ))}
                    </Space>
                </Row>
                {description &&
                    <Row align={'bottom'}>
                        <Typography.Title level={5}>
                            {description}
                        </Typography.Title>
                    </Row>
                }
                {xs && 
                    <Row>
                        <Col>
                            <DarkArrowButton>
                                Details
                            </DarkArrowButton>
                        </Col>
                    </Row>
                }
            </SpaceBetween>
        </Padding>
    </ContainerBg>
}