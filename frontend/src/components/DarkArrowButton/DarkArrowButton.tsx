import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled"
import { ArrowRightOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from "antd";
import { responsiveSize } from "@/utils/responsiveSize";

const Circle = styled(Col, {
    shouldForwardProp: (prop) => !['rotate'].includes(prop),
})<{ rotate?: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${responsiveSize('width', 68, 40, 40)}
    ${responsiveSize('height', 68, 40, 40)}
    ${responsiveSize('margin-right', 12, 10, 8)}
    background: ${({ theme }: any) => theme?.token?.colors?.dark['06']};
    border: 1px solid ${({ theme }: any) =>  theme?.token?.colors?.dark[15]};
    border-radius: 50%;

    svg {
        transform: rotate(${({ rotate }: any) => rotate ?? -45}deg);
        font-size: 30px;
        ${responsiveSize('font-size', 30, 20, 19)}
        fill: ${({ theme }: any) =>  theme?.token?.colors?.orange[80]};
    }
`

const Hover = styled(Row)`
    cursor: pointer;
    text-transform: uppercase;

    .ant-typography {
        margin: 0;
        color: ${({ theme }: any) =>  theme?.token?.colors?.grey[70]};
        white-space: nowrap;
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

export const DarkArrowButton: FC<PropsWithChildren<{ rotate?: number }>> = ({ children, rotate }) => {
    return <Hover wrap={false} align={'middle'} justify={'center'}>
        <Circle rotate={rotate} className="dark-arrow-button-circle">
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