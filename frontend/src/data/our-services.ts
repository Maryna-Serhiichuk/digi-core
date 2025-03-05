import array from '@/data/our-services.json'
import design from '@/sources/icons/web-design.svg'
import device from '@/sources/icons/device.svg'
import tag from '@/sources/icons/tag.svg'
import setting from '@/sources/icons/setting.svg'

const icons = [
    design,
    device,
    tag,
    setting
]

export const ourServices = array?.map((item, index) => ({ ...item, icon: icons[index] }))