import { FC, PropsWithChildren } from "react";
import { Header } from "../Header";
import { Container } from "../Container";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return <Container>
        <Header/>
        {children}
    </Container>
}