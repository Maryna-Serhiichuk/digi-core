import { Row, Spin } from "antd";
import { FC } from "react";

export const Loading: FC = () => {
    return <Row justify={'center'} align={'middle'} style={{ height: '100vh', width: '100%' }}>
        <Spin size={'large'}/>
    </Row>
}