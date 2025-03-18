import tag from '@/sources/icons/tag.svg'
import suitcase from '@/sources/icons/suitcase.svg'
import graph from '@/sources/icons/graph.svg'
import database from '@/sources/icons/database.svg'
import arrow from '@/data/jobs.json'

const icons = [
    suitcase,
    tag,
    graph,
    database
]

export const jobs = arrow?.map((item, index) => ({ ...item, icon: icons[index] }))