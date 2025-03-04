import { GraphQLFieldResolver } from "graphql"

type Context = any // Graphql.ResolverContext
type User = any // UsersPermissions.UserService

const me: GraphQLFieldResolver<null, Context, null> = async (root, args, ctx) => {
  const userService: User = strapi.plugin("users-permissions").service("user")
  const user = await userService.fetch(ctx.state.user.id, { populate: "*" })
  if (!user) return null

  return {
    ...user,
    id: ctx.state.user.id,
  }
}

export { me }
