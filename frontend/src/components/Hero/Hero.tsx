import { Button, Col, Row } from "antd";
import { FC, Fragment, PropsWithChildren } from "react";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";
import { Gap } from "@/components/Gap";
import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { RunLine } from "@/components/RunLine";
import { Head, HeadArgs, HeroNav, HeroNavArrow } from "@/components/Hero/components";
import { Picture, PictureArgs } from "@/components/Picture";
import lineWords from '@/data/services.json'
import { DarkArrowButton } from "../DarkArrowButton";

interface HeroArgs extends HeadArgs {
    main?: boolean
    image?: PictureArgs
}

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

const Navigation = styled(Row)`
    position: absolute;
    width: 100%;
    bottom: 30px;
`

export const Hero: FC<PropsWithChildren<HeroArgs>> = ({ children, main, image, ...headArgs }) => {
    return <Col span={24}>
        <Gap>
            <ContainerBg xs={24} md={16}>
                <Padding inlineSize={'large'} blockSize={[100, 60]}>
                    <Head {...headArgs}/>
                </Padding>
                <Padding inlineSize={'small'} blockSize={[0, 40]}>
                    <RunLine data={lineWords} />
                </Padding>
            </ContainerBg>
            {main
                ? <ContainerBgHover xs={0} md={8} outsideChildren={<HeroNavArrow/>}>
                    <HeroNav/>
                </ContainerBgHover>
                : <ContainerBg xs={24} md={8}>
                    {children ??
                        <Fragment>
                            <Picture {...image} />
                            <Navigation>
                                <Padding inlineSize={'small'}>
                                    <Col span={24}>
                                        <Row justify={'space-between'}>
                                            <DarkArrowButton color={'light'}>
                                                View Blog
                                            </DarkArrowButton>
                                            <Button 
                                                ghost
                                                type={'default'}
                                            >
                                                Web development
                                            </Button>
                                        </Row>
                                    </Col>
                                </Padding>
                            </Navigation>
                        </Fragment>
                    }
                </ContainerBg>
            }    
        </Gap>
    </Col>
}