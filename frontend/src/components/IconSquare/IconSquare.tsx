import { responsiveSize } from "@/utils/responsiveSize";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import styled from "@emotion/styled"
import { Col } from "antd";

export interface IconSquareArgs {
    icon: StaticImageData
    alt: string
}

const ImageRec = styled(Col)`
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark[12]};
    border: 1px solid ${({ theme }: any) =>  theme?.token?.colors?.dark[20]};
    ${responsiveSize('padding', 16, 12, 8)}
    border-radius: 12px;
`

export const IconSquare: FC<IconSquareArgs> = ({ icon, alt }) => {
    return <ImageRec>
        <Image width={34} src={icon} alt={alt + "icon"} />
    </ImageRec>
}