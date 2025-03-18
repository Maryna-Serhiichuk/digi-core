import { Col } from "antd";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";
import Link from "next/link";

export interface CircleIconButtonArgs {
    icon?: StaticImageData
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

    img {
        width: 24px;
        fill: #E7BEB1;
    }
`

export const CircleIconButton: FC<CircleIconButtonArgs> = ({ icon, link }) => {
    return <Link href={link ?? ''}>
        <Circle>
            {icon &&
                <Image src={icon} alt={''}/>
            }
        </Circle>
    </Link>
}