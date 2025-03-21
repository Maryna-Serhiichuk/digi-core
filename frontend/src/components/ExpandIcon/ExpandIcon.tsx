import { FC } from "react";
import Image from "next/image";
import styled from "@emotion/styled"
import Line from '@/components/Icons/Line'
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

    svg {
        fill: ${({ theme }: any) => theme?.token?.colors?.primary[80]};
    }
`

const VerticalLine = styled(Line, {
    shouldForwardProp: (prop) => !['open'].includes(prop),
})<{ open?: ExpandIcon['open'] }>`
    position: absolute;
    transform: rotate(${({ open }: any) => open ? 0 : -90}deg);
    transition: 300ms;
`

export const ExpandIcon: FC<ExpandIcon> = ({ open }) => {
    return <Container>
        <Line />
        <VerticalLine open={open} />
    </Container>
}