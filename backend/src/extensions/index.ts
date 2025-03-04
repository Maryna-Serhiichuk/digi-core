import resolvers, { resolversConfig } from './../graphql/resolvers/index'

const dd: Tete.SSt = 'info'
const ddd: TeteTe.SSt = 'warn'

const readOnlyEntities = [
  'api::category.category',
  'api::post.post',
  'api::website.website',
  'plugin::email-emitter.email',
  'plugin::email-designer.email-template',
  'plugin::i18n.locale',
  'plugin::menus.menu',
  'plugin::menus.menu-item',
  'plugin::users-permissions.permission',
  'plugin::users-permissions.role',
  'plugin::upload.folder',
  'plugin::users-permissions.user',
] as Strapi.ContentTypeUIDs[]

const writeOnlyEntities = ['api::contact.contact', 'plugin::email-emitter.email'] as Strapi.ContentTypeUIDs[]

const schemaExtension: Strapi.Graphql.ExtensionCallback = ({ nexus }) => ({
  types: [
    nexus.extendType({
      type: 'Query',
      definition: t => {
        t.field('me', {
          type: 'UsersPermissionsUser',
        })
      },
    }),
  ],
  resolvers,
  resolversConfig,
})

export { readOnlyEntities, schemaExtension, writeOnlyEntities }
