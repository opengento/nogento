export default {
  Query: {
    products: (_, __, context) => context.Product.loadAll()
  }
};
