export default {
  Query: {
    products: (_, __, context) => context.ProductLoader.loadAll()
  }
};
