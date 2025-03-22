import { Hero } from "@/components/Hero";
import { FC } from "react";
import full from "@/sources/hero-about/full.jpg"
import middle from "@/sources/hero-about/middle.jpg"
import mobile from "@/sources/hero-about/mob.jpg"

export const HeroAbout: FC = () => {
    return <Hero
        title={'Building the Future of Technology Together'}
        image={{ full, middle, mobile, alt: '' }}
    />
}