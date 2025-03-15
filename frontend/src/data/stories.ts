import smile from '@/sources/icons/smile.svg'
import heart from '@/sources/icons/hand-heart.svg'
import array from '@/data/stories.json'

const icons = [
    smile,
    heart
]

export const stories = array?.map((item, index) => ({ ...item, icon: icons[index] }))