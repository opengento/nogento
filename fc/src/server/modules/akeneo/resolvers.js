export default {
  Query: {
    products: (_, __, context) => context.ProductLoader.loadAll(),
    categories: (_, __, context) => context.CategoryLoader.loadAll(),
  },
  Product: {
    imageUrl: ({ imageUrl }, _, context) =>
      context.ProductLoader.getImageForProduct(imageUrl)
  }
};
