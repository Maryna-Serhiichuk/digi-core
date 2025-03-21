import { Row, Col } from "antd";
import { FC } from "react";
import styled from "@emotion/styled"
import { ArrowRightOutlined } from '@ant-design/icons';
import { responsiveSize } from "@/utils/responsiveSize";
import Link from "next/link";

const Button = styled(Row)`
    overflow: hidden;
    position: relative;
    z-index: 2;
    cursor: pointer;
    transition: 200ms;

    &:hover {
        .start-button-text {
            opacity: 0;
        }
        .start-button-circle {
            &:after {
                height: 200px;
                width: 200px;
                right: 50%;
                transform: translate(50%, -50%) rotate(45deg); scale(2);
            }
        }
        .start-button-border {
            transform: translateX(350%);
        }
        .start-button-hidden {
            opacity: 1;
        }
    }
`

const Text = styled(Col)`
    position: relative;
    z-index: 2;
    ${responsiveSize('font-size', 24, 20, 20)}
    font-weight: 500;
    color: ${({ theme }: any) =>  theme?.token?.colors?.orange[60]};
    text-transform: uppercase;
    transition: inherit;
`

const Hidden = styled(Text)`
    position: absolute;
    z-index: 3;
    left: 50px;
    opacity: 0;
    transition: 400ms;
`

const Circle = styled(Row)`
    position: relative;
    ${responsiveSize('width', 77, 56, 56)}
    ${responsiveSize('height', 77, 56, 56)}
    border-radius: 50%;
    border: 2px solid ${({ theme }: any) =>  theme?.token?.colors?.orange[60]};
    transition: inherit;

    &:after {
        content: '';
        height: 40px;
        width: 40px;
        background: ${({ theme }: any) =>  theme?.token?.colors?.dark[10]};
        position: absolute;
        z-index: 1;
        top: 50%;
        right: 0;
        transition: 400ms;
        transform: translate(50%, -50%) rotate(45deg);
    }
`

const Border = styled(Col)`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${({ theme }: any) =>  theme?.token?.colors?.dark[10]};
`

const Background = styled(Col)`
    position: relative;
    z-index: 2;
    left: 0;
    ${responsiveSize('width', 52, 40, 40)}
    ${responsiveSize('height', 52, 40, 40)}
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${({ theme }: any) =>  theme?.token?.colors?.orange[60]};
    transition: 300ms;

    svg {
        font-size: 20px;
        color: black;
    }
`

export const StartButton: FC<{ href?: string }> = ({ href }) => {
    return <Link href={href ?? '/contact'}>
        <Button align={'middle'}>
            <Hidden className="start-button-hidden">
                Let's go!
            </Hidden>
            <Col>
                <Circle className="start-button-circle">
                    <Border>
                        <Background className="start-button-border">
                            <ArrowRightOutlined />
                        </Background>
                    </Border>
                </Circle>
            </Col>
            <Text className="start-button-text">
                Start a project
            </Text>
        </Button>
    </Link>
}