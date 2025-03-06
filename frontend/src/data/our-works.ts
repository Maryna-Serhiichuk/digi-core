import array from '@/data/our-works.json'

import star from '@/sources/icons/star.svg'
import balloon from '@/sources/icons/balloon.svg'

import lightPurpleFull from '@/sources/light-purple/full.jpg'
import lightPurpleMid from '@/sources/light-purple/middle.jpg'
import lightPurpleMob from '@/sources/light-purple/mob.jpg'

import lightYellowFull from '@/sources/light-yellow/full.jpg'
import lightYellowMid from '@/sources/light-yellow/middle.jpg'
import lightYellowMob from '@/sources/light-yellow/mob.jpg'

import member1 from '@/sources/members/01.jpg'
import member2 from '@/sources/members/02.jpg'
import member3 from '@/sources/members/03.jpg'
import member4 from '@/sources/members/04.jpg'
import member5 from '@/sources/members/05.jpg'
import member6 from '@/sources/members/06.jpg'
import member7 from '@/sources/members/07.jpg'
import member8 from '@/sources/members/08.jpg'
import member9 from '@/sources/members/09.jpg'

const icons = [
    star,
    balloon
]

const images = [
    {
        full: lightPurpleFull,
        middle: lightPurpleMid,
        mob: lightPurpleMob
    },
    {
        full: lightYellowFull,
        middle: lightYellowMid,
        mob: lightYellowMob
    },
]

const members = [
    member1, member2, member3,
    member4, member5, member6,
    member7, member8, member9
]

export const ourWorks = array?.map(({ members: ms, ...item }, index) => ({ ...item, icon: icons[index], image: images[index], members: ms?.map(it => members[it]) }))