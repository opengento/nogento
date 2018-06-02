export default {
  Query: {
    products: (_, __, context) => context.Product.loadAll(),
    product: (_, { sku }, context) => context.Product.loadBySku(sku),
    productsByCategory: (_, { categoryCode }, context) =>
      context.Product.loadByCategoryCode(categoryCode)
  },
  Product: {
    imageUrl: ({ imageUrl }, _, context) =>
      context.Product.getPublicImageUrl(imageUrl)
  }
};
