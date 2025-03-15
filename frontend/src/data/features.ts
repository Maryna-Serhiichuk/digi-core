import pen from '@/sources/icons/pen.svg'
import star from '@/sources/icons/star.svg'
import user from '@/sources/icons/user.svg'
import time from '@/sources/icons/time.svg'
import array from '@/data/features.json'

const icons = [
    pen,
    star,
    user,
    time
]

export const features = array?.map((item, index) => ({ ...item, icon: icons[index] }))