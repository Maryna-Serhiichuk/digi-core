import { Typography } from "antd";
import { FC } from "react";
import ReactMarkdown from 'react-markdown'
import styled from "@emotion/styled"

const Paragraph = styled(Typography.Paragraph)`
    margin-block: 10px;
    margin-left: 60px;
    @media(max-width: 1100px) {
        margin-left: 0px;
    }
`

const Title = styled(Typography.Title)`
    &&& {
        margin-block: 10px;
    }
`

export const Markdown: FC<{data: string | undefined, clear?: boolean}> = ({ data, clear = false }) => {
    
    return <ReactMarkdown components={{
        // img: ({src, alt}) => (src ? <img className={"markdown-image"} src={src} alt={alt}/> : null),
        // ul: ({children}) => <ul><Typography.Title level={5}>{children}</Typography.Title></ul>,
        // a: ({href, children}) => children,
        p: ({children}) => clear 
            ? <Typography.Title level={5}>{children}</Typography.Title> 
            : <Paragraph>{children}</Paragraph>,
        // h1: ({children}) => children,
        h2: ({children}) => clear ? '' : <Typography.Title level={2}>{children}</Typography.Title>,
        h3: ({children}) => clear ? '' : <Title level={3}>{children}</Title>,
        // h4: ({children}) => children,
        // li: ({children}) => children,
        // strong: ({children}) => children
    }}>{data}</ReactMarkdown>
}