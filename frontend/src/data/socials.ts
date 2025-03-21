import Instagram from '@/components/Icons/Instagram'
import Twitter from '@/components/Icons/Twitter'
import array from '@/data/socials.json'

const icons = [
    Instagram,
    Twitter,
    Twitter,
    Twitter
]

export const socials = array?.map((it, i) => ({ ...it, element: icons[i] }))