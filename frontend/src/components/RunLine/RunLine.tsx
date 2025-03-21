import { FC } from "react";
import Marquee from "react-fast-marquee";
import styled from "@emotion/styled"
import { Col, Typography } from "antd";
import { responsiveSize } from "@/utils/responsiveSize";

interface RunLineArgs {
    data: string[]
    background?: 'default' | 'ghost'
}

const Circle = styled('div')`
    width: 8px;
    height: 8px;
    background: ${({ theme }: any) =>  theme?.token?.colors?.primary[60]};
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

const MarqueeBg = styled(Marquee, {
    shouldForwardProp: (prop) => !['background'].includes(prop),
})<{ background?: RunLineArgs['background'] }>`
    background: ${({ theme, background }: any) => background ? theme?.token?.colors?.dark[10] : theme?.token?.colors?.dark['06']};
    border-radius: 10px;
`

const Container = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: end;
`

export const RunLine: FC<RunLineArgs> = ({ data, background }) => {
    return <Container>
        <MarqueeBg background={background} autoFill={true} speed={100}>
            {data?.map((it, i) => (
                <Item key={it + i}>
                    <Word level={4} style={{ marginBottom: 0 }}>
                        {it}
                    </Word>
                    <Circle/>
                </Item>
            ))}
        </MarqueeBg>
    </Container>
}