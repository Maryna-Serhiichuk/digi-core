import { FC } from "react";
import { Avatar, Button, Col, Row, Space, Typography } from "antd";
import Link from "next/link";
import styled from "@emotion/styled"
import { Border } from "@/components/Border";
import { ContainerBg } from "@/components/ContainerBg";
import { Gap } from "@/components/Gap";
import { IconSquareLabelArgs } from "@/components/IconSquareLabel";
import { Padding } from "@/components/Padding";
import { Picture, PictureArgs } from "@/components/Picture";
import { Tag } from "@/components/Tag";
import { ProjectHead } from "@/components/ProjectHead";


export interface ProjectArgs extends IconSquareLabelArgs {
    description: string
    category: string
    time: string
    technologies: string[]
    image: PictureArgs
    members: MemberType[]
}

const UpperTitle = styled(Typography.Title)`
    text-transform: uppercase;
    && {
        color: ${({ theme }: any) => theme?.token?.colors?.absolute?.text};
    }
`

const Images = styled(Avatar)`
    img {
        background: ${({ theme }: any) => theme?.token?.colors?.orange[80]};
    }
`

export const Project: FC<ProjectArgs> = ({ icon, title, category, time, image, technologies, description, members, ...props }) => {
    return <Col span={24}>
        <Border>
            <Gap>
                <ProjectHead
                    xs={{ span: 24, order: 2 }} md={{ span: 14, order: 1 }} lg={12} xl={8}
                    title={title}
                    {...props}
                    tags={[
                        { key: 'Category', value: category },
                        { key: 'Time Taken', value: time },
                    ]}
                    description={description}
                />
                <ContainerBg xs={{ span: 24, order: 1 }} md={{ span: 10, order: 2 }} lg={12} xl={8}>
                    <Picture {...image} />
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
                                                <Images key={member?.photo?.src} size={50} src={member?.photo?.src}/>
                                            ))}
                                        </Space>
                                    </Col>
                                </Row>
                            </Padding>
                        </ContainerBg>
                        <ContainerBg span={24}>
                            <Link href={'/contact'}>
                                <Button type={'primary'} block>
                                    Book a Call
                                </Button>
                            </Link>
                        </ContainerBg>
                    </Gap>
                </Col>
            </Gap>
        </Border>
    </Col>
}