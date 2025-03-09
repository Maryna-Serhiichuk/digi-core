import { FC, PropsWithChildren } from "react";
import { Header } from "../Header";
import { Container } from "../Container";
import { Footer } from "../Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return <Container>
        <Header/>
        {children}
        <Footer/>
    </Container>
}