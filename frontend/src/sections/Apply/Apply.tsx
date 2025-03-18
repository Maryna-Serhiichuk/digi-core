import { Section } from "@/components/Section";
import { FC } from "react";
import steps from '@/data/steps.json'
import { Card } from "@/components/Card";

export const Apply: FC = () => {
    return <Section label={'Your Path to Joining Our Team'}>
        {steps?.map((step, index) => (
            <Card
                key={step?.title}
                xs={24} sm={24} md={12} lg={8}
                subtitle={'Step ' + (index < 10 ? '0' + (index+1) : (index+1)?.toString())}
                title={step?.title}
                description={step?.description}
            />
        ))}
    </Section>
}