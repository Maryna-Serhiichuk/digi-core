'use client'

import { FC } from "react";
import { Hero } from "@/components/Hero";

export const MainHero: FC = () => {
    return <Hero 
        main 
        title={'Digital Solutions * That Drive Success'}
        subtitle={'At DigiCore, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.'}
    />
}