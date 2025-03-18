import { FC, Fragment } from "react";
import { ContainerBg } from "../ContainerBg";
import { Padding } from "../Padding";
import { Col, Grid, Row, Typography } from "antd";
import { TitleNavigation, TitleNavigationArgs } from "./components/TitleNavigation";

export interface TitleArgs extends TitleNavigationArgs {
    label: string
}

export const Title: FC<TitleArgs> = ({ label, ...navigationProps }) => {
    const { md } = Grid.useBreakpoint()
    return <Fragment>
        <ContainerBg span={24}>
            <Padding inlineSize={'middle'} blockSize={'middle'}>
                <Col span={24}>
                    <Row align={'middle'} justify={'space-between'}>
                        <Col>
                            <Typography.Title level={2}>
                                {label}
                            </Typography.Title>
                        </Col>
                        <Col hidden={!md}>
                            <TitleNavigation {...navigationProps}/>
                        </Col>
                    </Row>
                </Col>
            </Padding>
        </ContainerBg>
        <Col hidden={md}>
            <TitleNavigation {...navigationProps}/>
        </Col>
    </Fragment>
}