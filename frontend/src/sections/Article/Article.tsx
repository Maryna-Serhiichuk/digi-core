import { ContainerBg } from "@/components/ContainerBg";
import { Picture } from "@/components/Picture";
import { FC, Fragment, useEffect, useRef } from "react";
import styled from "@emotion/styled"
import { Affix, Col, Flex, Row, Typography } from "antd";
import { responsiveSize } from "@/utils/responsiveSize";
import { Markdown } from "@/components/Markdown";
import { Padding } from "@/components/Padding";
import { Gap } from "@/components/Gap";
import { Member } from "@/components/Member";
import { ArticleType } from "@/data/articles";
import { IconSquare } from "@/components/IconSquare";
import twitter from '@/sources/icons/twitter.svg'
import facebook from '@/sources/icons/facebook.svg'
import instagram from '@/sources/icons/instagram.svg'
import { useAffixContainerController } from "@/hooks/useAffixContainerController";

const Illustration = styled(Row)`
    ${responsiveSize('height', 600, 600, 240)}
`

export const Article: FC<{ data: ArticleType | undefined }> = ({ data }) => {
    const container = useRef<HTMLDivElement | null>(null)
    const [listener, affixPosition] = useAffixContainerController(container)

    useEffect(() => {
        window.addEventListener('scroll', listener)
        return window.addEventListener('scroll', listener)
    }, [])
    
    return <Fragment>
        <ContainerBg span={24}>
            <Illustration>
                <Picture {...data?.illustration} />
            </Illustration>
        </ContainerBg>
        <Col span={24} ref={container}>
            <Gap>
                <Col span={3}>
                    <Affix offsetTop={16} style={{ position: 'sticky', display: affixPosition }}>
                        <Flex vertical gap={16}>
                            <Row justify={'end'}>
                                <IconSquare icon={twitter} alt="twitter"/>
                            </Row>
                            <Row justify={'end'}>
                                <IconSquare icon={facebook} alt="twitter"/>
                            </Row>
                            <Row justify={'end'}>
                                <IconSquare icon={instagram} alt="twitter"/>
                            </Row>
                        </Flex>
                    </Affix>
                </Col>
                <ContainerBg span={14}>
                    <Padding inlineSize={'middle'} blockSize={'small'}>
                        <Markdown data={data?.contain}/>
                    </Padding>
                </ContainerBg>
                <Col span={7}>
                    <Affix offsetTop={16} style={{ position: 'sticky', display: affixPosition }}>
                        <Row>
                            <ContainerBg span={24}>
                                <Padding inlineSize={'small'} blockSize={'small'}>
                                    <Flex vertical gap={20}>
                                        <Row>
                                            <Member data={data?.author} />
                                        </Row>
                                        {data?.comment &&
                                            <Row>
                                                <Typography.Title level={5}>
                                                    {data?.comment}
                                                </Typography.Title>
                                            </Row>
                                        }
                                    </Flex>
                                </Padding>
                            </ContainerBg>
                        </Row>
                    </Affix>
                </Col>
            </Gap>
        </Col>
    </Fragment>
}