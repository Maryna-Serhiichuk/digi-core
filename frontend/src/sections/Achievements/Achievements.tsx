import { Section } from "@/components/Section";
import { FC } from "react";
import achievements from '@/data/achievements.json'
import { Card } from "@/components/Card";

export const Achievements: FC = () => {
    return <Section label={'Our Achievements'}>
        {achievements?.map(achievement => (
            <Card 
                key={achievement?.date} 
                xs={24} md={12} lg={6}
                subtitle={achievement?.date}
                title={achievement?.title}
                description={achievement?.description}
            />
        ))}
    </Section>
}