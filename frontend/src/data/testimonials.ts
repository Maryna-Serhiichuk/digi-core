import array from './testimonials.json'
import { getMembers } from './members/members'

const membersIds = ['1', '3', '2', '19']

const members = getMembers(membersIds)

export const testimonials = array?.map((item, index) => ({ ...item, member: members[index] }))