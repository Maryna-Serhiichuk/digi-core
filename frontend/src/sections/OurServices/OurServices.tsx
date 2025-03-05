import { FC } from "react";
import { Section } from "@/components/Section";
import { ourServices } from "@/data/our-services";
import { IconDescription } from "@/components/IconDescription";

export const OurServices: FC = () => {
    return <Section label={"Our Services"}>
        {ourServices?.map(service => (
            <IconDescription key={service?.title} {...service} />
        ))}
    </Section>
}