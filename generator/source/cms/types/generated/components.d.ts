import type { Schema, Attribute } from '@strapi/strapi';

export interface DynamicHero extends Schema.Component {
  collectionName: 'components_dynamic_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bold';
  };
  attributes: {
    heading: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dynamic.hero': DynamicHero;
    }
  }
}
