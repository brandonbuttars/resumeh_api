'use strict';

/**
 * Portfolio.js controller
 *
 * @description: A set of functions called "actions" for managing `Portfolio`.
 */

module.exports = {

  /**
   * Retrieve portfolio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.portfolio.fetchAll(ctx.query);
  },

  /**
   * Retrieve a portfolio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.portfolio.fetch(ctx.params);
  },

  /**
   * Count portfolio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.portfolio.count(ctx.query);
  },

  /**
   * Create a/an portfolio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.portfolio.add(ctx.request.body);
  },

  /**
   * Update a/an portfolio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.portfolio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an portfolio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.portfolio.remove(ctx.params);
  }
};
