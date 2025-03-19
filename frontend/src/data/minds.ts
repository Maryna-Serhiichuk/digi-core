import { getMembers } from './members/members'

const memberIds = ['1', '3', '4', '5']

export const minds = getMembers(memberIds)?.map(member => ({
    ...member,
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    linkedin: "http://linkedin.com"
}))