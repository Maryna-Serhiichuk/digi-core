import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { Section } from "@/components/Section";
import { testimonials } from "@/data/testimonials";
import { Avatar, Col, Row, Space, Typography } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";
import { Member } from "@/components/Member";

const Title = styled(Typography.Title)`
    && {
        ${responsiveSize('font-size', 26, 22, 18)}
        text-transform: uppercase;
        color: ${({ theme }: any) => theme?.token?.colors?.orange[95]};
    }
`

const Light = styled(Row)`
    background: ${({ theme }: any) => theme?.token?.colors?.dark[12]};
`



export const Testimonials: FC = () => {
    return <Section label={"Testimonials"}>
        {testimonials?.map(testimonial => (
            <ContainerBg key={testimonial?.title} xs={24} md={12} xl={6}>
                <Padding inlineSize={'small'} blockSize={'small'}>
                    <Space size={16} direction={'vertical'}>
                        <Row>
                            <Title level={5}>
                                {testimonial?.title}
                            </Title>
                        </Row>
                        <Row>
                            <Typography.Title level={4}>
                                {testimonial?.description}
                            </Typography.Title>
                        </Row>
                    </Space>
                </Padding>
                <Light wrap={false}>
                    <Padding inlineSize={'small'} blockSize={30}>
                        <Col>
                            <Member data={testimonial?.member}/>
                        </Col>
                        {/* <Col>
                            arrow
                        </Col> */}
                    </Padding>
                </Light>
            </ContainerBg>
        ))}
    </Section>
}