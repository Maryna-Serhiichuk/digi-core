import { responsiveSize } from "@/utils/responsiveSize";
import { ComponentType, FC, SVGProps } from "react";
import styled from "@emotion/styled"
import { Col } from "antd";

export interface IconSquareArgs {
    element?: ComponentType<SVGProps<SVGSVGElement>>
    size?: number
}

const ImageRec = styled(Col)`
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark[12]};
    border: 1px solid ${({ theme }: any) =>  theme?.token?.colors?.dark[20]};
    ${responsiveSize('padding', 16, 12, 8)}
    border-radius: 12px;
    svg {
        fill: ${({ theme }: any) =>  theme?.token?.colors?.primary[60]};
    }
`

export const IconSquare: FC<IconSquareArgs> = ({ element: Icon, size }) => {
    return <ImageRec>
        {Icon && <Icon height={size ?? 34} width={size ?? 34}/>}
    </ImageRec>
}