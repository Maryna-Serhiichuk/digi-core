import { FC, PropsWithChildren } from "react";
import { Col, Row, Typography } from "antd";
import styled from "@emotion/styled"
import { ArrowCircle, ArrowCircleArgs } from "@/components/ArrowCircle";
import { ArrowCircleHover } from "@/components/ArrowCircle/ArrowCircleHover";
import { NavLink, NavLinkArgs } from "@/components/NavLink";

export interface DarkArrowButtonArgs extends PropsWithChildren<ArrowCircleArgs>, ArrowCircleArgs, NavLinkArgs {}

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

export const DarkArrowButton: FC<PropsWithChildren<DarkArrowButtonArgs>> = ({ children, rotate, color, href }) => {
    return <NavLink href={href}>
        <Hover wrap={false} align={'middle'} justify={'center'}>
            <ArrowCircle rotate={rotate} color={color} />
            <Col className="dark-arrow-button-text">
                <Row align={'middle'}>
                    <Typography.Title level={4}>
                        {children}
                    </Typography.Title>
                </Row>
            </Col>
        </Hover>
    </NavLink>
}