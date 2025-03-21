import Smile from '@/components/Icons/Smile'
import Heart from '@/components/Icons/HandHeart'

import array from '@/data/stories.json'

const icons = [
    Smile,
    Heart
]

export const stories = array?.map((item, index) => ({ ...item, element: icons[index] }))