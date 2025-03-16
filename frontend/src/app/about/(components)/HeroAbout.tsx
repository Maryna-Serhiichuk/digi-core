import { Hero } from "@/components/Hero";
import { FC } from "react";
import full from "@/sources/hero-about/full.jpg"
import middle from "@/sources/hero-about/middle.jpg"
import mobile from "@/sources/hero-about/mob.jpg"

export const HeroAbout: FC = () => {
    return <Hero
        titleLine1={'Building the Future of'}
        titleLine2={'Technology Together'}
        image={{ full, middle, mobile, alt: '' }}
    />
}