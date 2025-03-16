import { Section } from "@/components/Section";
import { FC } from "react";
import styled from "@emotion/styled"
import { minds } from '@/data/minds'
import { ContainerBg } from "@/components/ContainerBg";
import { Col, Flex, Row, Space, Typography } from "antd";
import { Picture } from "@/components/Picture";
import { Padding } from "@/components/Padding";
import { responsiveSize } from "@/utils/responsiveSize";
import { CircleIconButton } from "@/components/CircleIconButton";
import Facebook from '@/sources/icons/facebook.svg'
import Twitter from '@/sources/icons/twitter.svg'
import Linkedin from '@/sources/icons/linkedin.svg'

const Photo = styled(Row)`
    background: #E7BEB1;
    border-radius: 12px;
    height: 220px;
    ${responsiveSize('height', 220, 180, 150)}
    picture {
       display: flex;
       align-items: end; 
    }
    img {
        height: 90%;
        object-fit: contain;
        object-position: center bottom;
        display: block;   
        margin: 0 auto;
    }
`

export const Members: FC = () => {
    return <Section label={'Meet the Visionaries Driving DigiCore Forward'}>
        {minds?.map(person => (
            <ContainerBg xs={24} md={12} lg={6}>
                <Padding inlineSize={'small'} blockSize={'small'}>
                    <Col span={24}>
                        <Flex gap={20} vertical>
                            <Flex gap={5} vertical>
                                <Row justify={'center'}>
                                    <Typography.Title level={3}>
                                        {person?.fullName}
                                    </Typography.Title>
                                </Row>
                                <Row justify={'center'}>
                                    <Typography.Title level={5}>
                                        {person?.position}
                                    </Typography.Title>
                                </Row>
                            </Flex>
                            <Flex gap={30} vertical>
                                <Photo>
                                    <Picture full={person?.photo} alt={person?.fullName} />
                                </Photo>
                                <Row justify={'center'}>
                                    <Space size={14}>
                                        <CircleIconButton icon={Facebook} link={person?.facebook}/>
                                        <CircleIconButton icon={Twitter} link={person?.twitter}/>
                                        <CircleIconButton icon={Linkedin} link={person?.linkedin}/>
                                    </Space>
                                </Row>
                            </Flex>
                        </Flex>
                    </Col>
                </Padding>
            </ContainerBg>
        ))}
    </Section>
}