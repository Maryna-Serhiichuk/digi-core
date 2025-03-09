'use client'

import { ContainerBg } from "@/components/ContainerBg";
import { Gap } from "@/components/Gap";
import { Padding } from "@/components/Padding";
import { Col } from "antd";
import { FC } from "react";
import { RunLine } from "@/components/RunLine";
import { Hero, HeroNav } from "./components";
import { HeroNavArrow } from "./components/HeroNavArrow";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";
import lineWords from '@/data/services.json'

const ContainerBgHover = styled(ContainerBg)`
    &:hover {
        .hero-nav-arrow {
            .hero-nav-arrow-border {
                &:after {
                    ${responsiveSize('width', 160, 124, 0)}
                    transform: rotate(-45deg) translateX(0%);
                    border-radius: 50%;
                }
            }

            .hero-nav-arrow-bg {
                transform: translate(5px, -5px) scale(1.1);
            }
        }
    }
`

export const MainHero: FC = () => {
    return <Col span={24}>
        <Gap>
            <ContainerBg xs={24} md={16}>
                <Padding inlineSize={'large'} blockSize={[100, 60]}>
                    <Hero/>
                </Padding>
                <Padding inlineSize={'small'} blockSize={[0, 40]}>
                    <RunLine data={lineWords} />
                </Padding>
            </ContainerBg>
            <ContainerBgHover xs={0} md={8} outsideChildren={<HeroNavArrow/>}>
                <HeroNav/>
            </ContainerBgHover>
        </Gap>
    </Col>
}