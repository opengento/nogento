export default {
  Query: {
    products: (_, __, context) => context.ProductLoader.search(),
    categories: (_, __, context) => context.CategoryLoader.loadAll(),
    category: (_, { code }, context) =>
      context.CategoryLoader.getCategoryByCode(code)
  },
  Category: {
    children: ({ code }, __, context) =>
      context.ProductLoader.search({
        categories: [
          {
            operator: "IN",
            value: [code]
          }
        ]
      })
  }
};
