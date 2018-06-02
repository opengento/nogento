export default {
  Query: {
    products: (_, __, context) => context.Product.loadAll()
  },
  Product: {
    imageUrl: ({ imageUrl }, _, context) =>
      context.Product.fetchPublicImageUrl(imageUrl)
  }
};
