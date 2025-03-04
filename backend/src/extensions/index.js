"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeOnlyEntities = exports.schemaExtension = exports.readOnlyEntities = void 0;
const resolvers_1 = __importStar(require("./../resolvers"));
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
];
exports.readOnlyEntities = readOnlyEntities;
const writeOnlyEntities = ['api::contact.contact', 'plugin::email-emitter.email'];
exports.writeOnlyEntities = writeOnlyEntities;
const schemaExtension = ({ nexus }) => ({
    types: [
        nexus.extendType({
            type: 'Query',
            definition: t => {
                t.field('me', {
                    type: 'UsersPermissionsUser',
                });
            },
        }),
    ],
    resolvers: resolvers_1.default,
    resolversConfig: resolvers_1.resolversConfig,
});
exports.schemaExtension = schemaExtension;
