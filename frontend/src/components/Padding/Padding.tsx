'use client'

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Row } from "antd";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";

type PaddingType = 'large' | 'middle' | 'small' | number | number[]

type PaddingArgs = {
    inlineSize?: PaddingType
    blockSize?: PaddingType
}

type PaddingState = [number[], Array<number[]>]

const StyledRow = styled(Row, {
    shouldForwardProp: (prop) => !['paddingInline', 'paddingBlock'].includes(prop),
  })<{ paddingInline: number[], paddingBlock: Array<number[]> }>`
    flex-grow: 1;
    ${({ paddingInline }) => responsiveSize('padding-left', paddingInline[0], paddingInline[1], paddingInline[2])}
    ${({ paddingInline }) => responsiveSize('padding-right', paddingInline[0], paddingInline[1], paddingInline[2])}

    ${({ paddingBlock }) => responsiveSize('padding-top', paddingBlock[0][0], paddingBlock[0][1], paddingBlock[0][2])}
    ${({ paddingBlock }) => responsiveSize('padding-bottom', paddingBlock[1][0], paddingBlock[1][1], paddingBlock[1][2])}
`

const getPadding = ({ inlineSize, blockSize }: PaddingArgs): PaddingState => {
    const getInline = () => {
        if(typeof inlineSize === 'string'){
            switch (inlineSize) {
                case 'large': return [80, 40, 24]
                case 'middle': return [50, 40, 24]
                case 'small': return [40, 30, 24]
            }
        } else if(typeof inlineSize === 'number') {
            return [inlineSize, inlineSize/2, inlineSize/3]
        } else {
            return [3, 2, 1]
        }
    }

    const getBlock = () => {
        if(typeof blockSize === 'string'){
            switch (blockSize) {
                case 'large': return [[100, 50, 30], [80, 50, 30]]
                case 'middle': return [[50, 40, 24], [50, 40, 24]]
                case 'small': return [[40, 30, 24], [40, 30, 24]]
            }
        } else if(typeof blockSize === 'number') {
            return [[blockSize, blockSize/2, blockSize/3], [blockSize, blockSize/2, blockSize/3]]
        } else if(typeof blockSize === 'object') {
            console.log(blockSize, [blockSize[0], blockSize[0]/2, blockSize[0]/3])
            return [[blockSize[0], blockSize[0]/2, blockSize[0]/3], [blockSize[1],blockSize[1]/2,blockSize[1]/3]]
        } else {
            return [[3, 2, 1], [3, 2, 1]]
        }
    }

    return [getInline(), getBlock()]
}

export const Padding: FC<PropsWithChildren<PaddingArgs>> = ({ children, ...props }) => {
    const [[inline, block], setPadding] = useState<PaddingState>([[3, 2, 1], [[3, 2, 1], [3, 2, 1]]])

    useEffect(() => {
        setPadding(getPadding(props))
    }, [props.blockSize, props.inlineSize])

    return <StyledRow paddingInline={inline} paddingBlock={block}>
        {children}
    </StyledRow>
}