import { FC } from "react";
import Image from "next/image";
import styled from "@emotion/styled"
import Line from '@/sources/icons/line.svg'
import { responsiveSize } from "@/utils/responsiveSize";

type ExpandIcon = {
    open?: boolean
}

const Container = styled('div')`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    ${responsiveSize('width', 52, 40, 40)}
    ${responsiveSize('height', 52, 40, 40)}
    background: ${({ theme }: any) => theme?.token?.colors?.dark[12]};
    border: 1px solid ${({ theme }: any) => theme?.token?.colors?.dark[20]};
    border-radius: 50%;
`

const VerticalLine = styled(Image, {
    shouldForwardProp: (prop) => !['open'].includes(prop),
})<{ open?: ExpandIcon['open'] }>`
    position: absolute;
    transform: rotate(${({ open }: any) => open ? 0 : -90}deg);
    transition: 300ms;
`

export const ExpandIcon: FC<ExpandIcon> = ({ open }) => {
    return <Container>
        <Image src={Line} alt={""} />
        <VerticalLine open={open} src={Line} alt={""} />
    </Container>
}