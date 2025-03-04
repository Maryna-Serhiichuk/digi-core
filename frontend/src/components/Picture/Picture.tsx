import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import styled from "@emotion/styled"

type PictureSrc = StaticImageData

type Picture = {
    full?: PictureSrc 
    middle?: PictureSrc
    mobile?: PictureSrc
    alt?: string
}

const ImageBg = styled(Image)`
    object-fit: cover;
    height: 100%;
    width: 100%;
`

export const Picture: FC<PropsWithChildren<Picture>> = ({ children, full, middle, mobile, alt }) => {
    return <picture>
        <source srcSet={mobile?.src} media="(max-width: 798px)" />
        <source srcSet={middle?.src} media="(max-width: 1440px)"/>
        <source srcSet={full?.src} media="(min-width: 1441px)" />
        {children ?? <ImageBg src={full ?? middle ?? mobile ?? ''} alt={alt ?? ''}/>}
    </picture>
}