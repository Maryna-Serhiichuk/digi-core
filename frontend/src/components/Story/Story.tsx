import { FC } from "react";
import { IconSquareLabelArgs } from "@/components/IconSquareLabel";
import { Col } from "antd";
import { Border } from "@/components/Border";
import { Gap } from "@/components/Gap";
import { ProjectHead } from "@/components/ProjectHead";
import { Tabs } from "@/components/Tabs";

interface StoryArgs extends IconSquareLabelArgs {
    industry: string
    service: string
    challenge: string
    solution: string
    results: string
}

export const Story: FC<StoryArgs> = ({ industry, service, challenge, solution, results, title, ...props }) => {
    return <Col span={24}>
        <Gap>
            <Border>
                <Gap>
                    <ProjectHead
                        xs={24} sm={24} lg={12}
                        title={title}
                        {...props}
                        tags={[
                            { key: 'Industry', value: industry },
                            { key: 'Service Utilixed', value: service }
                        ]}
                    />
                    <Col xs={24} sm={24} lg={12}>
                        <Tabs source={[
                            { label: 'Challenge', text: challenge },
                            { label: 'Solution', text: solution },
                            { label: 'Results', text: results },
                        ]}/>
                    </Col>
                </Gap>
            </Border>
        </Gap>
    </Col>
}