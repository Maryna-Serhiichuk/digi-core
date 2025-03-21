import { Hero } from "@/components/Hero";
import { FC } from "react";
import { Flex, Row, Typography } from "antd";
import { Padding } from "@/components/Padding";

export const HeroCareers: FC = () => {
    return <Hero
        withoutLine
        title={'Empower Your * Career in the Digital Age'}
    >
        <Padding inlineSize={'middle'} blockSize={'middle'}>
            <Flex vertical gap={50}>
                <Row>
                    <Typography.Title level={2}>
                        Why Join Us?
                    </Typography.Title>
                </Row>
                <Row>
                    <Typography.Title level={5}>
                        We strive to create a vibrant and collaborative workplace that enables our team members to thrive in their roles. Join us and become part of a passionate, innovative team dedicated to delivering outstanding digital solutions to clients worldwide. We are committed to fostering talent, supporting professional development, and cultivating an environment where creativity flourishes.
                    </Typography.Title>
                </Row>
            </Flex>
        </Padding>
    </Hero>
}