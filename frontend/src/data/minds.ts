import harry from '@/sources/members-photo/harry.png'
import emily from '@/sources/members-photo/emily.png'
import bruno from '@/sources/members-photo/bruno.png'
import maria from '@/sources/members-photo/maria.png'
import array from '@/data/minds.json'

const photos = [
    harry,
    emily,
    maria,
    bruno,
]

export const minds = array?.map((item, index) => ({ ...item, photo: photos[index]}))