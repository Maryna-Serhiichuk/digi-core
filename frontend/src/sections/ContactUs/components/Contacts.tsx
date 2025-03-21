import { FC, useState } from "react";
import styled from "@emotion/styled"
import { Padding } from "../../../components/Padding";
import { Button, Col, Flex, Form, Row, Typography } from "antd";

type ContactType = 'phone'|'email'|'location'
type ContactItemType = { 
    type: ContactType, 
    label: string, 
    data: Array<{ label: string, value: string }> 
}

const contact: ContactItemType[] = [
    {
        type: 'phone',
        label: 'Phone',
        data: [
            { label: 'Sales', value: '+1 800 123 4567' },
            { label: 'Support', value: '+1 800 987 6543' },
            { label: 'HR', value: '+1 800 555 7890' }
        ]
    },
    {
        type: 'email',
        label: 'Emails',
        data: [
            { label: 'General Inquiries', value: 'info@devcompany.com' },
            { label: 'Support', value: 'support@devcompany.com' },
            { label: 'Careers', value: 'jobs@devcompany.com' }
        ]
    },
    {
        type: 'location',
        label: 'Location',
        data: [
            { label: 'Head Office', value: '123 Silicon Valley, San Francisco, CA' },
            { label: 'European Branch', value: '456 Tech Park, Berlin, Germany' },
            { label: 'Asia-Pacific Office', value: '789 Innovation Hub, Tokyo, Japan' }
        ]
    }
];

const Value = styled(Typography.Title)`
    && {
        padding-inline: 20px;
        padding-block: 26px;
        font-size: 18px;
        background: ${({ theme }: any) => theme?.token?.colors?.dark[12]};
        border-radius: 10px;
    }
`

export const Contacts: FC = () => {
    const [chosen, setChosen] = useState<ContactItemType>(contact[1])
    return <Padding inlineSize={'small'} blockSize={'small'}>
        <Col span={24}>
            <Flex vertical gap={60}>
                <Flex gap={12} justify={'space-between'}>
                    {contact?.map(item => (
                        <Col key={item?.type} span={8}>
                            <Button 
                                type={chosen?.type === item?.type ? 'primary' : 'default'} 
                                ghost={chosen?.type !== item?.type} 
                                block 
                                onClick={() => setChosen(item)}
                            >
                                {item?.label}
                            </Button>
                        </Col>
                    ))}
                </Flex>
                <Flex gap={24} vertical>
                    {chosen?.data?.map(item => (
                        <Flex key={item?.label} gap={10} vertical>
                            <Typography.Title level={4}>
                                {item?.label}
                            </Typography.Title>
                            <Value level={3}>
                                {item?.value}
                            </Value>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Col>
    </Padding>
}