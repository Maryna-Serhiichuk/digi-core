import { Contacts } from "@/sections/ContactUs/components/Contacts";
import { ContainerBg } from "@/components/ContainerBg";
import { FC, Fragment } from "react";
import { ContactForm } from "./components/Contact.form";

export const ContactUs: FC = () => {
    return <Fragment>
        <ContainerBg xs={24} sm={24} lg={10}>
            <Contacts/>
        </ContainerBg>
        <ContainerBg xs={24} sm={24} lg={14}>
            <ContactForm/>
        </ContainerBg>
    </Fragment>
}