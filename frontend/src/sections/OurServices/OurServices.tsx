import { FC } from "react";
import { Section } from "@/components/Section";
import { ourServices } from "@/data/our-services";
import { IconDescription, IconDescriptionArgs } from "@/components/IconDescription";

interface OurServicesArgs {
    images?: IconDescriptionArgs['image']
}

export const OurServices: FC<OurServicesArgs> = ({ images }) => {
    return <Section label={"Our Services"}>
        {ourServices?.map(service => (
            <IconDescription key={service?.title} {...service} image={images} />
        ))}
    </Section>
}