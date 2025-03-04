import { Row } from "antd";
import { FC, PropsWithChildren } from "react";

export const Gap: FC<PropsWithChildren> = ({ children }) => {
    return <Row gutter={[20, 20]} >
        {children}
    </Row>
}