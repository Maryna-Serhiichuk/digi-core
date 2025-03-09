'use client'

import { FC, Fragment } from "react";
import { Col } from "antd";
import { Socials } from "./components/Socials";
import { ContainerBg } from "../ContainerBg";
import { Navigation } from "./components/Navigation";
import { Subscriptor } from "./components/Subscriptor";
import { Gap } from "../Gap";
import { Info } from "./components/Info";

export const Footer: FC = () => {
    return <Fragment>
        <Col xs={24} lg={24} xl={10}>
            <Socials/>
        </Col>
        <Col xs={24} lg={24} xl={14}>
            <Gap>
                <ContainerBg span={24}>
                    <Navigation/>
                </ContainerBg>
                <ContainerBg span={24}>
                    <Subscriptor/>
                </ContainerBg>
                <ContainerBg span={24}>
                    <Info/>
                </ContainerBg>
            </Gap>
        </Col>
    </Fragment>
}