export default {
  Query: {
    products: (_, __, context) => context.ProductLoader.loadAll()
  },
  Product: {
    imageUrl: ({ imageUrl }, _, context) =>
      context.ProductLoader.getImageForProduct(imageUrl)
  }
};
