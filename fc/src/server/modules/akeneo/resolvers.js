export default {
  Query: {
    products: (_, __, context) => context.ProductLoader.loadAll(),
    product: (_, { sku }, context) => context.ProductLoader.loadBySku(sku)
  }
};
