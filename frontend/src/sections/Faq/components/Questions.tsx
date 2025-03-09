import { Collapse, Typography, theme } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import faq from '@/data/faq.json'
import { ExpandIcon } from "@/components/ExpandIcon";

const Label = styled(Typography.Title)`
    && {
        color: ${({ theme }: any) => theme?.token?.colors?.orange[95]};
    }
`

export const Questions: FC = () => {
    const { token } = theme.useToken();

    return <Collapse
        accordion
        bordered={false}
        defaultActiveKey={'0'}
        expandIconPosition={'end'}
        expandIcon={({ isActive }) => <ExpandIcon open={isActive}/>}
        items={faq?.map((q, i) => ({ 
            key: i.toString(), 
            label: <Label level={4}>{q.label}</Label>, 
            children: <Typography.Text>{q.text}</Typography.Text>,
            style: { 
                marginBottom: 20,
                background: token.colors?.dark[10],
                borderRadius: 16
            }
        }))}
    />
}