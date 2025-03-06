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
    margin-right: 16px;
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark[12]};
    border: 1px solid ${({ theme }: any) =>  theme?.token?.colors?.dark[20]};
    ${responsiveSize('padding', 16, 14, 14)}
    ${responsiveSize('border-radius', 12, 10, 10)}
`

export const IconSquare: FC<IconSquareArgs> = ({ icon, alt }) => {
    return <ImageRec>
        <Image src={icon} alt={alt + "icon"} />
    </ImageRec>
}