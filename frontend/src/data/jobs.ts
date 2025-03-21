import tag from '@/sources/icons/tag.svg'
import suitcase from '@/sources/icons/suitcase.svg'
import graph from '@/sources/icons/graph.svg'
import database from '@/sources/icons/database.svg'
import arrow from '@/data/jobs.json'

import Suitcase from '@/components/Icons/Suitcase'
import Graph from '@/components/Icons/Graph'
import Database from '@/components/Icons/Database'
import Tag from '@/components/Icons/Tag'

const icons = [
    Suitcase,
    Tag,
    Graph,
    Database
]

export const jobs = arrow?.map((item, index) => ({ ...item, element: icons[index] }))