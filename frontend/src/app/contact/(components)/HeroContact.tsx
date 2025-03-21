import { Hero } from "@/components/Hero";
import { FC } from "react";
import full from "@/sources/blog/01/full.jpg"
import middle from "@/sources/blog/01/middle.jpg"
import mobile from "@/sources/blog/01/mobile.jpg"

export const HeroContact: FC = () => {
    return <Hero
        title={'Get In Touch With Us Today'}
        subtitle={"At DigiCore, we appreciate your questions, feedback, and collaboration opportunities. Whether you're interested in our digital services, need information about our projects, or want to discuss potential partnerships, our team is ready to assist you."}
        image={{ full, middle, mobile, alt: '' }}
    />
}