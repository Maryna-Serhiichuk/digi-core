import { Col, Grid } from "antd";
import { FC } from "react";
import { ourWorks } from "@/data/our-works";
import { Gap } from "@/components/Gap";
import { Title } from "@/components/Title";
import { Project } from "@/sections/Project";
import { MoreButton } from "./components/MoreButton";

export const OurWorks: FC = () => {
    const { xs } = Grid.useBreakpoint()

    return <Col span={24}>
        <Gap>
            <Title label={'Our Works'}/>
            {ourWorks?.map(item => (
                <Project key={item?.title} {...item} />
            ))}
            {xs && <MoreButton/> }
        </Gap>
    </Col>
}