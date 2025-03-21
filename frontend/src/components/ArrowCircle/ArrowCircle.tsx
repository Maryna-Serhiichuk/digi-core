import { FC } from "react";
import styled from "@emotion/styled"
import { ArrowRightOutlined } from '@ant-design/icons';
import { responsiveSize } from "@/utils/responsiveSize";
import { Col } from "antd";

export interface ArrowCircleArgs {
    rotate?: number,
    color?: 'default' | 'ghost' | 'light'
}

const Circle = styled(Col, {
    shouldForwardProp: (prop) => !['rotate', 'color'].includes(prop),
})<{ 
    rotate?: ArrowCircleArgs['rotate'], 
    color?: ArrowCircleArgs['color'] 
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${responsiveSize('width', 68, 40, 40)}
    ${responsiveSize('height', 68, 40, 40)}
    ${responsiveSize('margin-right', 12, 10, 8)}
    background: ${({ theme, color }: any) => color === 'ghost' ? theme?.token?.colors?.dark[12] : (color === 'light' ? 'white' : theme?.token?.colors?.dark['06'])};
    border: 1px solid ${({ theme }: any) =>  theme?.token?.colors?.dark[15]};
    border-radius: 50%;

    svg {
        transform: rotate(${({ rotate }: any) => rotate ?? -45}deg);
        font-size: 30px;
        ${responsiveSize('font-size', 30, 20, 19)}
        fill: ${({ theme, color }: any) => color === 'light' ? 'black' : theme?.token?.colors?.primary[80]};
    }
`

export const ArrowCircle: FC<ArrowCircleArgs> = ({ rotate, color }) => {
    return <Circle rotate={rotate} color={color} className="dark-arrow-button-circle">
        <ArrowRightOutlined/>
    </Circle>
}