import { Col, Row, Typography } from "antd";
import { FC } from "react";
import { Border } from "@/components/Border";
import { ContainerBg } from "@/components/ContainerBg";
import { Gap } from "@/components/Gap";
import successes from '@/data/successes.json'
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";
import { DarkArrowButton } from "@/components/DarkArrowButton";

const Key = styled(Typography.Title)`
    text-align: center;
    text-transform: uppercase;
    && {
        color: ${({ theme }: any) =>  theme?.token?.colors?.grey[70]};
    }
`

const Value = styled(Typography.Title)`
    ${responsiveSize('font-size', 60, 40, 40)}
    && {
        margin: 0;
        color: ${({ theme }: any) =>  theme?.token?.colors?.primary[70]};
    }
`

const Container  = styled(Col)`
    ${responsiveSize('margin-top', 30, 20, 16)}
    ${responsiveSize('margin-bottom', 30, 20, 16)}
`

export const Successes: FC = () => {
    return <Col span={24}>
        <Border>
            <Gap>
                {successes?.map((success, index) => (
                    <ContainerBg key={success?.key} xs={(successes?.length % 2 !== 0 && successes.length-1 === index) ? 24 : 12} sm={8} lg={4}>
                        <Container span={24}>
                            <Row justify={'center'}>
                                <Key level={4}>
                                    {success.key}
                                </Key>
                            </Row>
                            <Row justify={'center'}>
                                <Value level={2}>
                                    {success.value}
                                </Value>
                            </Row>
                        </Container>
                    </ContainerBg>
                ))}
                <ContainerBg xs={24} sm={8} lg={4}>
                    <Row align={'middle'} justify={'center'} style={{ height: '100%' }}>
                        <Container span={24}>
                            <Col>
                                <DarkArrowButton href={'/about'}>
                                    Know more
                                </DarkArrowButton>
                            </Col>
                        </Container>
                    </Row>
                </ContainerBg>
            </Gap>
        </Border>
    </Col>
}