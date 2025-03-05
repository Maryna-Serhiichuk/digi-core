import { FC } from "react";
import Marquee from "react-fast-marquee";
import styled from "@emotion/styled"
import { Typography } from "antd";
import { responsiveSize } from "@/utils/responsiveSize";

const lineWords = ['Website Design', 'Branding', 'Website Development', 'Mobile App Development', 'Digital Marketing']

const Circle = styled('div')`
    width: 8px;
    height: 8px;
    background: ${({ theme }: any) =>  theme?.token?.colors?.orange[60]};
    border-radius: 50%;
`

const Word = styled(Typography.Title)`
    text-transform: uppercase;
    ${responsiveSize('padding-left', 23, 14, 10)}
    ${responsiveSize('padding-right', 23, 14, 10)}
`

const Item = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    ${responsiveSize('padding-top', 23, 18, 14)}
    ${responsiveSize('padding-bottom', 23, 18, 14)}
`

const MarqueeBg = styled(Marquee)`
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark['06']};
    border-radius: 10px;
`

export const RunLine: FC = () => {
    return <MarqueeBg autoFill={true} speed={100}>
        {lineWords?.map(it => (
            <Item>
                <Word level={4} style={{ marginBottom: 0 }}>
                    {it}
                </Word>
                <Circle/>
            </Item>
        ))}
    </MarqueeBg>
}