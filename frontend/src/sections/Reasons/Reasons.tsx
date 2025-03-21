import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { Row, Space, Typography } from "antd";
import { FC } from "react";
import reasons from '@/data/reasons.json'
import styled from "@emotion/styled"
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { responsiveSize } from "@/utils/responsiveSize";
import { Section } from "@/components/Section";

const ItemRow = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ButtonRow = styled(Row)`
    ${responsiveSize('padding-top', 23, 20, 16)}
`

export const Reasons: FC = () => {
    return <Section label={"Reasons to Choose DigiCore for your digital journey"}>
        {reasons?.map(reason => (
            <ContainerBg key={reason?.title} xs={24} md={12} lg={6}>
                <Padding inlineSize={'small'} blockSize={'small'}>
                    <ItemRow>
                        <Space size={12} direction={'vertical'}>
                            <Row>
                                <Typography.Title level={3}>
                                    {reason?.title}
                                </Typography.Title>
                            </Row>
                            <Row>
                                <Typography.Title level={5}>
                                    {reason?.description}
                                </Typography.Title>
                            </Row>
                        </Space>
                        <ButtonRow>
                            <DarkArrowButton href={'/projects'}>
                                Learn More
                            </DarkArrowButton>
                        </ButtonRow>
                    </ItemRow>
                </Padding>
            </ContainerBg>
        ))}
    </Section>
}