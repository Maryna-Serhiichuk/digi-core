import { FC } from "react";
import Image from "next/image";
import LogoImg from '@/sources/logo.svg';
import { Col, Row, Typography } from "antd";
import Link from "next/link";

export const Logo: FC = () => {
    return <Row gutter={[8,0]} align={'middle'} wrap={false}>
        {/* <Col>
            <Image src={LogoImg} alt={""}/>
        </Col> */}
        <Link href={'/'}>
            <Col>
                <Typography style={{ fontSize: 28, whiteSpace: 'nowrap' }}>
                    DigiCore
                </Typography>
            </Col>
        </Link>
    </Row>
}