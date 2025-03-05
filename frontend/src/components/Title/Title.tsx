import { FC } from "react";
import { ContainerBg } from "../ContainerBg";
import { Padding } from "../Padding";
import { Typography } from "antd";

export interface TitleArgs {
    label: string
}

export const Title: FC<TitleArgs> = ({ label }) => {
    return <ContainerBg span={24}>
        <Padding inlineSize={'middle'} blockSize={'middle'}>
            <Typography.Title level={2}>
                {label}
            </Typography.Title>
        </Padding>
    </ContainerBg>
}