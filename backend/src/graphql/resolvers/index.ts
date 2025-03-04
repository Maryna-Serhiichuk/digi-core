import { me } from './me'

const Query = {
  me
}

const Mutation = {}

export const resolversConfig: Strapi.Graphql.ResolverConfig = {
  'Query.me': {
    auth: false,
  },
}

export default { Query, Mutation }
