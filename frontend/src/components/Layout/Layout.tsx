import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Warning } from "@/components/Warning/Warning";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return <Container>
        <Warning/>
        <Header/>
        {children}
        <Footer/>
    </Container>
}