import { FC } from "react";
import { Col, Row } from "antd";
import { ContainerBg } from "@/components/ContainerBg";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { Padding } from "@/components/Padding";

export const MoreButton: FC = () => {
    return <ContainerBg>
        <Padding blockSize={'middle'}>
            <Col span={24}>
                <Row justify={'center'}>
                    <DarkArrowButton rotate={90}>
                        All Works
                    </DarkArrowButton>
                </Row>
            </Col>
        </Padding>
    </ContainerBg>
}