import Pen from '@/components/Icons/Pen'
import Star from '@/components/Icons/Star'
import User from '@/components/Icons/User'
import Time from '@/components/Icons/Time'
import array from '@/data/features.json'

const icons = [
    Pen,
    Star,
    User,
    Time
]

export const features = array?.map((item, index) => ({ ...item, element: icons[index] }))