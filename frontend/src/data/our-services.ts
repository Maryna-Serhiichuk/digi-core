import array from '@/data/our-services.json'
import design from '@/sources/icons/web-design.svg'
import device from '@/sources/icons/device.svg'
import tag from '@/sources/icons/tag.svg'
import setting from '@/sources/icons/setting.svg'

import blueFull1 from '@/sources/view-blue/full-01.jpg'
import blueMid1 from '@/sources/view-blue/middle-01.jpg'
import blueFull2 from '@/sources/view-blue/full.jpg'
import blueMid2 from '@/sources/view-blue/middle.jpg'

import redFull1 from '@/sources/view-red/full.jpg'
import redMid1 from '@/sources/view-red/middle.jpg'
import redFull2 from '@/sources/view-red/full-01.jpg'
import redMid2 from '@/sources/view-red/middle-01.jpg'

import yellowFull1 from '@/sources/view-yellow/full.jpg'
import yellowMid1 from '@/sources/view-yellow/middle.jpg'

import greenFull1 from '@/sources/view-green/full.jpg'
import greenMid1 from '@/sources/view-green/middle.jpg'
import greenFull2 from '@/sources/view-green/full-01.jpg'
import greenMid2 from '@/sources/view-green/middle-01.jpg'

const icons = [
    design,
    device,
    tag,
    setting
]

const views = [
    [
        { full: blueFull1, middle: blueMid1 },
        { full: blueFull2, middle: blueMid2 },
    ],
    [
        { full: redFull1, middle: redMid1 },
        { full: redFull2, middle: redMid2 },
    ],
    [
        { full: yellowFull1, middle: yellowMid1 },
        { full: greenFull2, middle: greenMid2 },
    ],
    [
        { full: greenFull1, middle: greenMid1 },
        { full: greenFull2, middle: greenMid2 },
    ],
]

export const ourServices = array?.map((item, index) => ({ ...item, icon: icons[index], images: views[index] }))