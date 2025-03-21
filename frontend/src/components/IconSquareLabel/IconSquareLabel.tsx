import { Col, Row, Typography } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import { IconSquare, IconSquareArgs } from "@/components/IconSquare";

export interface IconSquareLabelArgs extends Omit<IconSquareArgs, 'alt'> {
    title: string
}

const Label = styled(Col)`
    margin-left: 16px;
`

export const IconSquareLabel: FC<IconSquareLabelArgs> = ({ title, ...props }) => {
    return <Row align={'middle'} wrap={false}>
        <IconSquare {...props} />
        <Label>
            <Typography.Title level={3}>
                {title}
            </Typography.Title>
        </Label>
    </Row>
}