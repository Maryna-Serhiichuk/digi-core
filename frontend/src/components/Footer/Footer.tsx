'use client'

import { FC, Fragment } from "react";
import { Col } from "antd";
import { Socials } from "./components/Socials";

export const Footer: FC = () => {
    return <Fragment>
        <Col span={10}>
            <Socials/>
        </Col>
        <Col span={14}>
            djgdhsikl
        </Col>
    </Fragment>
}