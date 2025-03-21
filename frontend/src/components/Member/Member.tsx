import { Avatar, Col, Space, Typography } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";

const Person = styled(Typography.Title)`
    && {
        ${responsiveSize('font-size', 26, 16, 14)}
        white-space: nowrap;
    }
`

const Background = styled(Avatar)`
    img {
        background: ${({ theme }: any) => theme?.token?.colors?.orange[60]};
    }
`

export const Member: FC<{data: MemberType | undefined}> = ({ data }) => {
    return <Space size={12}>
        <Col>
            <Background size={60} src={data?.photo?.src} />
        </Col>
        <Col>
            <Person level={5}>
                {data?.fullName}
            </Person>
            <Person level={4}>
                {data?.position}
            </Person>
        </Col>
    </Space>
}