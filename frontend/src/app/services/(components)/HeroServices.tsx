import { Hero } from "@/components/Hero";
import { FC } from "react";
import full from "@/sources/hero-services/full.jpg"
import middle from "@/sources/hero-services/middle.jpg"
import mobile from "@/sources/hero-services/mob.jpg"

export const HeroSections: FC = () => {
    return <Hero
        titleLine1={'Our Comprehensive'}
        titleLine2={'Digital Solutions'}
        subtitle={'At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation'}
        image={{ full, middle, mobile, alt: '' }}
    />
}