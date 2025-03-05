'use client'

import { Row, Col, ColProps } from "antd";
import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled"

const StyledCol = styled('div')`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 100%;
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark[10]};
    color: ${({ theme }: any) => theme?.token?.colors?.dark[10]};
    border-radius: 16px;
`

export const ContainerBg: FC<PropsWithChildren<Pick<ColProps, 'span' | 'xs' | 'sm' | 'md' | 'lg'> & { outsideChildren?: PropsWithChildren['children'] }>> = ({ children, outsideChildren, ...colProps }) => {
    return <Col span={24} {...colProps}>
        {outsideChildren}
        <StyledCol style={{ paddingLeft: 0, paddingRight: 0 }}>
            {children}
        </StyledCol>
    </Col>
}