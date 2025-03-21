'use client'

import { Row, Col, ColProps } from "antd";
import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled"

export interface ContainerBgArgs extends PropsWithChildren<Pick<ColProps, 'span' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>> {
    outsideChildren?: PropsWithChildren['children'],
    background?: 'primary' | 'default'
}

const StyledCol = styled('div', {
    shouldForwardProp: (prop) => !['background'].includes(prop),
})<{ background?: ContainerBgArgs['background'] }>`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 100%;
    background: ${({ theme, background }: any) => background === 'primary' ? theme?.token?.colors?.primary[60] : theme?.token?.colors?.dark[10]};
    color: ${({ theme }: any) => theme?.token?.colors?.dark[10]};
    border-radius: 16px;
`

export const ContainerBg: FC<ContainerBgArgs> = ({ children, outsideChildren, background, ...colProps }) => {
    return <Col span={24} {...colProps}>
        {outsideChildren}
        <StyledCol background={background} style={{ paddingLeft: 0, paddingRight: 0 }}>
            {children}
        </StyledCol>
    </Col>
}