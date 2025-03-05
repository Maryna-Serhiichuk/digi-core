import { Col, Row } from "antd";
import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled"
import { responsiveSize } from "@/utils/responsiveSize";

const BorderRow = styled(Row)`
    width: 100%;
    padding: 18px;
    ${responsiveSize('padding', 18, 8, 8)}
    border: 2px solid ${({ theme }: any) =>  theme?.token?.colors?.dark[10]};
    border-radius: 16px;
`

export const Border: FC<PropsWithChildren> = ({ children }) => {
    return <BorderRow>
        <Col span={24}>
            {children}
        </Col>
    </BorderRow>
}