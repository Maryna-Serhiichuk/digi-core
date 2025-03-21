import { FC } from "react";
import styled from "@emotion/styled"
import { Picture, PictureArgs } from "@/components/Picture";
import { Grid } from "antd";
import { DarkArrowButton } from "../DarkArrowButton";
import { ArrowCircleHover } from "../ArrowCircle/ArrowCircleHover";
import { responsiveSize } from "@/utils/responsiveSize";

export interface ImageButtonArgs extends PictureArgs {
    link?: string
}

const Container = styled(ArrowCircleHover)`
    ${responsiveSize('height', 250, 180, 70)}
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid ${({ theme }: any) => theme?.token?.colors?.dark[20]};
    img {
        transition: 200ms;
    }
    &:hover img{
        transition: 400ms;
        transform: scale(1.2);
    }
`

const Link = styled('div')`
    position: absolute;
    z-index: 10;
    bottom: 25px;
    ${responsiveSize('left', 40, 30, 20)}
`

export const ImageButton: FC<ImageButtonArgs> = ({ link, ...pictureArgs }) => {
    const { xl } = Grid.useBreakpoint()

    return <Container>
        <Picture {...pictureArgs} />
        <Link>
            <DarkArrowButton color={'light'} href={'/projects'}>
                Open {xl ? 'Project' : ''}
            </DarkArrowButton>
        </Link>
    </Container>
}