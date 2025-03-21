import { Hero } from "@/components/Hero";
import { FC } from "react";
import full from "@/sources/hero-about/full.jpg"
import middle from "@/sources/hero-about/middle.jpg"
import mobile from "@/sources/hero-about/mob.jpg"

export const HeroContact: FC = () => {
    return <Hero
        title={'Get In Touch With Us Today'}
        subtitle={"At DigiCore, we appreciate your questions, feedback, and collaboration opportunities. Whether you're interested in our digital services, need information about our projects, or want to discuss potential partnerships, our team is ready to assist you."}
        image={{ full, middle, mobile, alt: '' }}
    />
}