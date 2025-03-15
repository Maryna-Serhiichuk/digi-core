import { Feature } from "@/components/Feature/Feature";
import { Section } from "@/components/Section";
import { features } from "@/data/features";
import { FC } from "react";

export const Features: FC = () => {
    return <Section label={"Key Features of Our Projects"}>
        {features?.map(feature => (
            <Feature key={feature?.title} {...feature} />
        ))}
    </Section>
}