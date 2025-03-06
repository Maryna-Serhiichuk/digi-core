import { Col, Row, Typography } from "antd";
import { FC } from "react";
import { IconSquare, IconSquareArgs } from "../IconSquare";

export interface IconSquareLabelArgs extends Omit<IconSquareArgs, 'alt'> {
    title: string
}

export const IconSquareLabel: FC<IconSquareLabelArgs> = ({ icon ,title }) => {
    return <Row align={'middle'} wrap={false}>
        <IconSquare icon={icon} alt={title} />
        <Col>
            <Typography.Title level={3}>
                {title}
            </Typography.Title>
        </Col>
    </Row>
}