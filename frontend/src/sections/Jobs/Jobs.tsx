import { Section } from "@/components/Section";
import { FC } from "react";
import { jobs } from '@/data/jobs'
import { Job } from "@/components/Job";

export const Jobs: FC = () => {
    return <Section label={'Build Your Future with Us'}>
        {jobs?.map(job => (
            <Job key={job?.id} {...job}/>
        ))}
    </Section>
}