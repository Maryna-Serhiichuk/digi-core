import { Typography } from "antd";
import { FC } from "react";
import ReactMarkdown from 'react-markdown'
import styled from "@emotion/styled"

const Paragraph = styled(Typography.Paragraph)`
    margin-block: 10px;
    margin-left: 60px;
`

const Title = styled(Typography.Title)`
    &&& {
        margin-block: 10px;
    }
`

export const Markdown: FC<{data: string | undefined}> = ({ data }) => {
    return <ReactMarkdown components={{
        // img: ({src, alt}) => (src ? <img className={"markdown-image"} src={src} alt={alt}/> : null),
        // ul: ({children}) => children,
        // a: ({href, children}) => children,
        p: ({children}) => <Paragraph>{children}</Paragraph>,
        // h1: ({children}) => children,
        h2: ({children}) => <Typography.Title level={2}>{children}</Typography.Title>,
        h3: ({children}) => <Title level={3}>{children}</Title>,
        // h4: ({children}) => children,
        // li: ({children}) => children,
        // strong: ({children}) => children
      }}>{data}</ReactMarkdown>
}