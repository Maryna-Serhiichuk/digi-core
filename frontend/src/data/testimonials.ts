import array from './testimonials.json'
import member1 from '@/sources/members/11.jpg'
import member2 from '@/sources/members/12.jpg'
import member3 from '@/sources/members/13.jpg'
import member4 from '@/sources/members/14.jpg'

const members = [
    {
        fullName: "Sarah Thompson",
        position: "CEO of BlueBloom",
        image: member1
    },
    {
        fullName: "Wade Warren",
        position: "Art Director",
        image: member2
    },
    {
        fullName: "Lisa Williams",
        position: "CEO Of HealthTech",
        image: member3
    },
    {
        fullName: "Jennifer Lee",
        position: "COO of Foodie Haven",
        image: member4
    }
]

export const testimonials = array?.map((item, index) => ({ ...item, member: members[index] }))