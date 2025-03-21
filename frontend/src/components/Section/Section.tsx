import { FC, PropsWithChildren } from "react";
import { Title, TitleArgs } from "@/components/Title";
import { Col } from "antd";
import { Border } from "@/components/Border";
import { Gap } from "@/components/Gap";

interface SectionArgs extends TitleArgs {
    id?: string
}

export const Section: FC<PropsWithChildren<SectionArgs>> = ({ children, id, ...titleArgs }) => {
    return <Col span={24} id={id}>
        <Border>
            <Gap>
                <Title {...titleArgs}/>
                {children}
            </Gap>
        </Border>
    </Col>
}