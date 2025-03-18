import { Col, Row, Typography } from "antd";
import { FC } from "react";
import styled from "@emotion/styled";
import { responsiveSize } from "@/utils/responsiveSize";

export interface BadgeArgs {
    name: string
    value?: string
}

const Container = styled(Row)`
    background: ${({ theme }: any) => theme?.token?.colors?.dark[12]};
    ${responsiveSize('padding-inline', 24, 18, 16)}
    ${responsiveSize('padding-block', 28, 22, 18)}
    border-radius: 14px;
`

const Text = styled(Typography.Title)`
    && {
        ${responsiveSize('font-size', 20, 18, 16)}
        text-transform: uppercase;
    }
`

export const Badge: FC<BadgeArgs> = ({ name, value }) => {
    return <Container justify={'space-between'}>
        <Col>
            <Text level={4}>
                {name}
            </Text>
        </Col>
        <Col>
            <Text level={3}>
                {value}
            </Text>
        </Col>
    </Container>
}