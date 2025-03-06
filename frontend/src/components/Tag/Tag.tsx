import { Col, Row, Typography } from "antd";
import { FC, Fragment } from "react";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";

interface TagArg {
    name?: string
    value: string
}

const Text = styled(Typography.Title)`
    && {
        margin: 0;
    }
    ${responsiveSize('font-size', 18, 14, 12)}
    white-space: nowrap;
`

const Value = styled(Text)`
    && {
        color: ${({ theme }: any) =>  theme?.token?.colors?.grey[90]};
    }
`

const Dot = styled(Col)`
    height: 4px;
    width: 4px;
    margin: 0 8px;
    background: ${({ theme }: any) =>  theme?.token?.colors?.orange[60]};
    border-radius: 50%;
    transform: translateY(1px);
`

const Background = styled(Row)`
    ${responsiveSize('padding-top', 16, 12, 10)}
    ${responsiveSize('padding-bottom', 16, 12, 10)}
    ${responsiveSize('padding-right', 22, 14, 12)}
    ${responsiveSize('padding-left', 22, 14, 12)}
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark[12]};
    border-radius: 45px;
`

export const Tag: FC<TagArg> = ({ name, value }) => {
    return <Col>
        <Row>
            <Background align={'middle'} wrap={false}>
                {name &&
                    <Fragment>
                        <Text level={5}>
                            {name}
                        </Text>
                        <Dot/>
                    </Fragment>
                }
                <Value level={5}>
                    {value}
                </Value>
            </Background>
        </Row>
    </Col>
}