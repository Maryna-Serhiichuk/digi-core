import { Hero } from "@/components/Hero";
import { FC } from "react";
import full from "@/sources/hero-projects/full.jpg"
import middle from "@/sources/hero-projects/middle.jpg"
import mobile from "@/sources/hero-projects/mob.jpg"

export const HeroSections: FC = () => {
    return <Hero
        titleLine1={'Empowering Your'}
        titleLine2={'Digital Vision'}
        subtitle={'At DigiCore, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence'}
        image={{ full, middle, mobile, alt: '' }}
    />
}