"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import bootstrap from './bootstrap'
const extensions_1 = require("./extensions");
exports.default = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register({ strapi }) {
        const extensionService = strapi.service("plugin::graphql.extension");
        extensionService.use(extensions_1.schemaExtension);
    },
    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    async bootstrap() {
        // await boostrap();
    },
};
