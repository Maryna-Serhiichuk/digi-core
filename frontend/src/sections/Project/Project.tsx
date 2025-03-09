import { Border } from "@/components/Border";
import { ContainerBg } from "@/components/ContainerBg";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { Gap } from "@/components/Gap";
import { IconSquareLabel, IconSquareLabelArgs } from "@/components/IconSquareLabel";
import { Padding } from "@/components/Padding";
import { Picture, PictureArgs } from "@/components/Picture";
import { Tag } from "@/components/Tag";
import { Avatar, Button, Col, Grid, Row, Space, Typography } from "antd";
import { StaticImageData } from "next/image";
import { FC } from "react";
import styled from "@emotion/styled"

export interface ProjectArgs extends IconSquareLabelArgs {
    description: string
    category: string
    time: string
    technologies: string[]
    image: PictureArgs
    members: StaticImageData[]
}

const SpaceBetween = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
`

const UpperTitle = styled(Typography.Title)`
    text-transform: uppercase;
    && {
        color: ${({ theme }: any) => theme?.token?.colors?.absolute?.text};
    }
`

export const Project: FC<ProjectArgs> = ({ icon, title, category, time, image, technologies, description, members }) => {
    const { xs } = Grid.useBreakpoint()
    return <Col span={24}>
        <Border>
            <Gap>
                <ContainerBg xs={{ span: 24, order: 2 }} md={{ span: 14, order: 1 }} lg={12} xl={8}>
                    <Padding  inlineSize={'small'} blockSize={'middle'}>
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
                                    <Tag name={'Category'} value={category} />
                                    <Tag name={'Time Taken'} value={time} />
                                </Space>
                            </Row>
                            <Row align={'bottom'}>
                                <Typography.Title level={5}>
                                    {description}
                                </Typography.Title>
                            </Row>
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
                <ContainerBg xs={{ span: 24, order: 1 }} md={{ span: 10, order: 2 }} lg={12} xl={8}>
                    <Picture {...image} alt={title} />
                </ContainerBg>
                <Col xs={0} xl={{ span: 8, order: 3 }}>
                    <Gap>
                        <ContainerBg span={24}>
                            <Padding inlineSize={'middle'} blockSize={'middle'}>
                                <Row>
                                    <Padding blockSize={[0, 20]}>
                                        <UpperTitle level={5}>
                                            Technologies Used
                                        </UpperTitle>
                                    </Padding>
                                </Row>
                                <Row gutter={[10, 10]}>
                                    {technologies?.map(technology => (
                                        <Tag key={technology} value={technology} />
                                    ))}
                                </Row>
                            </Padding>
                        </ContainerBg>
                        <ContainerBg span={24}>
                            <Padding inlineSize={'middle'} blockSize={26}>
                                <Row gutter={[40, 15]} align={'middle'}>
                                    <Col>
                                        <UpperTitle level={5}>
                                            Team Members
                                        </UpperTitle>
                                    </Col>
                                    <Col>
                                        <Space size={10}>
                                            {members?.map(member => (
                                                <Avatar key={member?.src} size={50} src={member?.src}/>
                                            ))}
                                        </Space>
                                    </Col>
                                </Row>
                            </Padding>
                        </ContainerBg>
                        <ContainerBg span={24}>
                            <Button type={'primary'}>
                                Book a Call
                            </Button>
                        </ContainerBg>
                    </Gap>
                </Col>
            </Gap>
        </Border>
    </Col>
}