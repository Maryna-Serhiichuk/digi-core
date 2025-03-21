import { FC } from "react";
import styled from "@emotion/styled"
import { ArrowRightOutlined } from '@ant-design/icons';
import { responsiveSize } from "@/utils/responsiveSize";

const Container = styled('div')`
    position: absolute;
    z-index:2;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${responsiveSize('height', 191, 137, 0)}
    ${responsiveSize('width', 191, 137, 0)}
    background: ${({ theme }: any) =>  theme?.token?.colorBgBase};
    border-radius: 50%;
    transform: translate(18%, -10%);
`

const Border = styled('div')`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    ${responsiveSize('height', 149, 111, 0)}
    ${responsiveSize('width', 149, 111, 0)}
    background: ${({ theme }: any) =>  theme?.token?.colors?.primary[60]};
    border-radius: 50%;

    &:before {
        position: absolute;
        content: '';
        ${responsiveSize('height', 143, 105, 0)}
        ${responsiveSize('width', 143, 105, 0)}
        background: ${({ theme }: any) =>  theme?.token?.colorBgBase};
        border-radius: 50%;
    }

    &:after {
        position: relative;
        z-index: 3;
        position: absolute;
        content: '';
        ${responsiveSize('height', 160, 124, 0)}
        ${responsiveSize('width', 80, 70, 0)}
        background: ${({ theme }: any) =>  theme?.token?.colorBgBase};
        transform: rotate(-45deg) translateX(50%);
        border-radius: 0 70% 70% 0;
        transition: 200ms;
    }
`

const Background = styled('div')`
    position: relative;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    ${responsiveSize('height', 88, 60, 0)}
    ${responsiveSize('width', 88, 60, 0)}
    background: ${({ theme }: any) =>  theme?.token?.colors?.primary[60]};
    border-radius: 50%;
    transition: 300ms;

    svg {
        fill: black;
        ${responsiveSize('font-size', 50, 30, 0)}
        transform: rotate(-45deg);
    }
`

export const HeroNavArrow: FC = () => {
    return <Container className="hero-nav-arrow">
        <Border className="hero-nav-arrow-border">
            <Background className="hero-nav-arrow-bg">
                <ArrowRightOutlined />
            </Background>
        </Border>
    </Container>
}