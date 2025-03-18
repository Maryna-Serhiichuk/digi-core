import { Hero } from "@/components/Hero";
import { FC } from "react";
import full from "@/sources/hero-projects/full.jpg"
import middle from "@/sources/hero-projects/middle.jpg"
import mobile from "@/sources/hero-projects/mob.jpg"

export const HeroSections: FC = () => {
    return <Hero
        titleLine1={'Empower Your Career'}
        titleLine2={'in the Digital Age'}
        image={{ full, middle, mobile, alt: '' }}
    />
}