import { Gap } from "@/components/Gap";
import { Title } from "@/components/Title";
import { Col } from "antd";
import { FC } from "react";
import { stories } from '@/data/stories'
import { Story } from "@/components/Story";

export const Stories: FC = () => {
    return <Col span={24}>
        <Gap>
            <Title label={'Success Stories'}/>
            {stories?.map(story => (
                <Story {...story} />
            ))}
        </Gap>
    </Col>
}