import Instagram from '@/sources/icons/instagram.svg'
import Twitter from '@/sources/icons/twitter.svg'
import array from '@/data/socials.json'

const icons = [
    Instagram,
    Twitter,
    Twitter,
    Twitter
]

export const socials = array?.map((it, i) => ({ ...it, icon: icons[i] }))