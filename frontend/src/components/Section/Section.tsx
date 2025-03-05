import { FC, PropsWithChildren } from "react";
import { Title, TitleArgs } from "@/components/Title";
import { Col } from "antd";
import { Border } from "@/components/Border";
import { Gap } from "@/components/Gap";

interface SectionArgs extends TitleArgs {}

export const Section: FC<PropsWithChildren<SectionArgs>> = ({ children, label }) => {
    return <Col span={24}>
        <Border>
            <Gap>
                <Title label={label}/>
                {children}
            </Gap>
        </Border>
    </Col>
}