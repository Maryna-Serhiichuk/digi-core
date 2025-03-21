import { Col } from "antd";
import Image, { StaticImageData } from "next/image";
import { ComponentType, FC, SVGProps } from "react";
import styled from "@emotion/styled"
import Link from "next/link";

export interface CircleIconButtonArgs {
    element?: ComponentType<SVGProps<SVGSVGElement>>
    link?: string
}

const Circle = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    background: ${({ theme }: any) => theme?.token?.colors?.dark[12]};
    border: 1px solid ${({ theme }: any) => theme?.token?.colors?.dark[20]};
    border-radius: 50%;

    svg {
        fill: ${({ theme }: any) => theme?.token?.colors?.orange[80]};
    }
`

export const CircleIconButton: FC<CircleIconButtonArgs> = ({ element: Icon, link }) => {
    return <Link href={link ?? ''}>
        <Circle>
            {Icon &&
                <Icon width={24} height={24}/>
            }
        </Circle>
    </Link>
}