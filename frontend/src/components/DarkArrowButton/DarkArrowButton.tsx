import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled"
import { Col, Row, Typography } from "antd";
import { ArrowCircle, ArrowCircleArgs } from "../ArrowCircle";
import { ArrowCircleHover } from "../ArrowCircle/ArrowCircleHover";

export interface DarkArrowButtonArgs extends PropsWithChildren<ArrowCircleArgs>, ArrowCircleArgs {}

const Hover = styled(ArrowCircleHover)`
    cursor: pointer;
    text-transform: uppercase;

    .ant-typography {
        margin: 0;
        color: ${({ theme }: any) =>  theme?.token?.colors?.grey[70]};
        white-space: nowrap;
    }

    .dark-arrow-button{
        &-text {
            transition: 300ms;
        }
    }

    &:hover {
        .dark-arrow-button-text {
            transform: scale(0.95);
        }
    }
`

export const DarkArrowButton: FC<PropsWithChildren<ArrowCircleArgs>> = ({ children, rotate, color }) => {
    return <Hover wrap={false} align={'middle'} justify={'center'}>
        <ArrowCircle rotate={rotate} color={color} />
        <Col className="dark-arrow-button-text">
            <Row align={'middle'}>
                <Typography.Title level={4}>
                    {children}
                </Typography.Title>
            </Row>
        </Col>
    </Hover>
}