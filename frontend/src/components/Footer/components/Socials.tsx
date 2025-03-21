import { FC } from "react";
import { Col, Row, Typography } from "antd";
import styled from "@emotion/styled"
import { ArrowCircle } from "@/components/ArrowCircle";
import { ArrowCircleHover } from "@/components/ArrowCircle/ArrowCircleHover";
import { ContainerBg } from "@/components/ContainerBg";
import { Gap } from "@/components/Gap";
import { IconSquare } from "@/components/IconSquare";
import { Padding } from "@/components/Padding";
import { responsiveSize } from "@/utils/responsiveSize";
import { socials } from "@/data/socials";
import Link from "next/link";

const Text = styled(Row)`
    ${responsiveSize('margin-top', 80, 50, 30)}
`

const Description = styled(Row)`
    margin-top: 20px;
`

export const Socials: FC = () => {
    return <Gap>
        {socials?.map(social => (
            <ContainerBg key={social?.name} span={12}>
                <Link href={social?.href}>
                    <ArrowCircleHover>
                        <Padding blockSize={'small'} inlineSize={'small'}>
                            <Col span={24}>
                                <Row justify={'space-between'}>
                                    <Col>
                                        <IconSquare icon={social?.icon} alt={social?.name}/>
                                    </Col>
                                    <Col>
                                        <ArrowCircle color={'ghost'}/>
                                    </Col>
                                </Row>
                                <Text>
                                    <Col>
                                        <Row>
                                            <Typography.Title level={3}>
                                                {social?.name}
                                            </Typography.Title>
                                        </Row>
                                        <Description>
                                            <Typography.Title level={5}>
                                                {social?.description}
                                            </Typography.Title>
                                        </Description>
                                    </Col>
                                </Text>
                            </Col>
                        </Padding>
                    </ArrowCircleHover>
                </Link>
            </ContainerBg>
        ))}
    </Gap>
}