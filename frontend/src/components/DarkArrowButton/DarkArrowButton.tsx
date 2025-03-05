import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled"
import { ArrowRightOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from "antd";
import { responsiveSize } from "@/utils/responsiveSize";

const Circle = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    ${responsiveSize('width', 68, 40, 40)}
    ${responsiveSize('height', 68, 40, 40)}
    margin-right: 12px;
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark['06']};
    border: 1px solid ${({ theme }: any) =>  theme?.token?.colors?.dark[15]};
    border-radius: 50%;

    svg {
        transform: rotate(-45deg);
        font-size: 30px;
        fill: ${({ theme }: any) =>  theme?.token?.colors?.orange[80]};
    }
`

const Hover = styled(Row)`
    cursor: pointer;
    text-transform: uppercase;

    .ant-typography {
        margin: 0;
        color: ${({ theme }: any) =>  theme?.token?.colors?.grey[70]};
    }

    .dark-arrow-button{
        &-circle, &-text {
            transition: 300ms;
        }
    }

    &:hover {
        .dark-arrow-button-circle {
            transform: scale(1.15);
        }
        .dark-arrow-button-text {
            transform: scale(0.95);
        }
    }
`

export const DarkArrowButton: FC<PropsWithChildren> = ({ children }) => {
    return <Hover align={'middle'} justify={'center'}>
        <Circle className="dark-arrow-button-circle">
            <ArrowRightOutlined/>
        </Circle>
        <Col className="dark-arrow-button-text">
            <Row align={'middle'}>
                <Typography.Title level={4}>
                    {children}
                </Typography.Title>
            </Row>
        </Col>
    </Hover>
}