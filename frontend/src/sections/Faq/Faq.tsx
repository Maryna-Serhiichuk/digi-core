import { Col } from "antd";
import { FC } from "react";
import { Gap } from "@/components/Gap";
import { Title } from "@/components/Title";
import { Questions } from "./components/Questions";
import { Ask } from "./components/Ask";
import { ContainerBg } from "@/components/ContainerBg";

export const Faq: FC = () => {
    return <Col span={24} id={'faq'}>
        <Gap>
            <Title label={'Freqently asked questions'} />
            <Col sm={24} md={12} xl={14}>
                <Questions/>
            </Col>
            <ContainerBg sm={24} md={12} xl={10}>
                <Ask/>
            </ContainerBg>
        </Gap>
    </Col>
}