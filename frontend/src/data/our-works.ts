import Star from '@/components/Icons/Star'
import Balloon from '@/components/Icons/Balloon'

import lightPurpleFull from '@/sources/light-purple/full.jpg'
import lightPurpleMid from '@/sources/light-purple/middle.jpg'
import lightPurpleMob from '@/sources/light-purple/mob.jpg'

import lightYellowFull from '@/sources/light-yellow/full.jpg'
import lightYellowMid from '@/sources/light-yellow/middle.jpg'
import lightYellowMob from '@/sources/light-yellow/mob.jpg'

import { getMembers } from './members/members'
import { StaticImageData } from 'next/image'
import { PictureArgs } from '@/components/Picture'
import { ComponentType, SVGProps } from 'react'

interface OurWorksType {
    id: string
    title: string
    description: string
    category: string
    time: string
    technologies: string[]
    icon?: StaticImageData
    element: ComponentType<SVGProps<SVGSVGElement>>
    image: PictureArgs
    members: MemberType[]
}

interface OurWorksTypeIds extends Omit<OurWorksType, 'members'> {
    members: string[]
}

const ourWorksPrevent: Array<OurWorksTypeIds> = [
    {
        id: '1',
        title: "Zenith Fitness App",
        description: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
        category: "Mobile App Development",
        time: "6 months",
        technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
        element: Star,
        image: { full: lightPurpleFull,middle: lightPurpleMid, mobile: lightPurpleMob },
        members: ["5", "8", "9", "10", "12"]
    },
    {
        id: '2',
        title: "A-Aura Ecommerce",
        description: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
        category: "Web Design & Development",
        time: "3 months",
        technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
        element: Balloon,
        image: { full: lightYellowFull, middle: lightYellowMid, mobile: lightYellowMob },
        members: ["5", "7", "8", "10", "13"]
    }
]



export const ourWorks = ourWorksPrevent?.map(({ members: ms, ...item }) => ({ 
    ...item,
    members: getMembers(ms)
}))