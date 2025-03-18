import { FC } from "react";
import { Button, Col, Flex, Row, Typography } from "antd";
import { ContainerBg } from "@/components/ContainerBg";
import { Padding } from "@/components/Padding";
import { IconSquareLabel, IconSquareLabelArgs } from "@/components/IconSquareLabel";
import { DarkArrowButton } from "@/components/DarkArrowButton";
import { Tag } from "@/components/Tag";

interface JobArgs extends IconSquareLabelArgs {
    id: string
    salary?: string
    experience?: string
    deadline?: string
    description?: string
}

export const Job: FC<JobArgs> = ({ id, icon, title, salary, experience, deadline, description }) => {
    return <ContainerBg xs={24} sm={24} lg={12}>
        <Padding inlineSize={'small'} blockSize={'small'}>
            <Flex vertical gap={30}>
                <Flex vertical gap={30}>
                    <Row align={'middle'} justify={'space-between'} wrap={false}>
                        <Col>
                            <IconSquareLabel icon={icon} title={title}/>
                        </Col>
                        <Col>
                            <DarkArrowButton>
                                View Details
                            </DarkArrowButton>
                        </Col>
                    </Row>
                    <Row gutter={[10, 10]}>
                        {salary && <Tag name={'Salary'} value={salary}/>}
                        {experience && <Tag name={'Experience'} value={experience}/>}
                        {deadline && <Tag name={'Deadline'} value={deadline}/>}
                    </Row>
                </Flex>
                {description &&
                    <Row>
                        <Flex vertical gap={10}>
                            <Typography.Title level={3}>
                                Skills
                            </Typography.Title>
                            <Typography.Title level={5}>
                                {description}
                            </Typography.Title>
                        </Flex>
                    </Row>
                }
                <Row>
                    <Button block type={'primary'}>
                        Apply Now
                    </Button>
                </Row>
            </Flex>
        </Padding>
    </ContainerBg>
}