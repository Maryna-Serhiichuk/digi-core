'use client'

import { Button, Col, Flex, Modal, Result, Typography } from "antd";
import { FC, Fragment, useState } from "react";

export const Warning: FC = () => {
    const [warn, setWarn] = useState(true)

    return <Fragment>
        <Col style={{ position: 'absolute', transform: 'translateY(-45px)', cursor: 'pointer' }} onClick={() => setWarn(true)}>
            <Typography.Title level={5}>
                Please note that this is not a real website. It has been created solely for portfolio purposes.
            </Typography.Title>
        </Col>
        <Modal
            title={<Flex align={'center'}>
                <Result status={'warning'} />
                Disclaimer: Portfolio Demonstration Only
            </Flex>}
            centered
            open={warn}
            width={700}
            closable={false}
            footer={null}
        >
            <Typography.Title level={4}>
                Please note that this website is not real. It has been created solely for demonstration purposes and is intended only as a portfolio example. All information presented on this site is fictional and should not be interpreted as real.
            </Typography.Title>
            <Button block type={'primary'} onClick={() => setWarn(false)}>
                I understand
            </Button>
        </Modal>

    </Fragment>
}