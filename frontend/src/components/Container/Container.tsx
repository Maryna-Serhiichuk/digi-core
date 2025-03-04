'use client'

import { Col, Row } from "antd";
import { FC, PropsWithChildren } from "react";
import { Gap } from "../Gap";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";

const ContainerGap = styled(Col)`
    ${responsiveSize('padding-left', 50, 40, 16)}
    ${responsiveSize('padding-right', 50, 40, 16)}
    ${responsiveSize('padding-top', 50, 50, 50)}
    ${responsiveSize('padding-bottom', 50, 50, 50)}
`

export const Container: FC<PropsWithChildren> = ({ children }) => {
    return <ContainerGap span={24}>
        <Gap>
            {children}
        </Gap>
    </ContainerGap>
}