import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled"
import { Row, RowProps } from "antd";

interface ArrowCircleHoverArgs extends RowProps {}

const Hover = styled(Row)`
    .dark-arrow-button{
        &-circle {
            transition: 300ms;
        }
    }

    &:hover {
        .dark-arrow-button-circle {
            transform: scale(1.15);
        }
    }
`

export const ArrowCircleHover: FC<PropsWithChildren<ArrowCircleHoverArgs>> = ({ children, ...rowProps }) => {
    return <Hover wrap={false} align={'middle'} justify={'center'} {...rowProps}>
        {children}
    </Hover>
}