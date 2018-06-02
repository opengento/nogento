export default {
  Query: {
    categories: (_, __, context) => context.Category.loadAll(),
    category: (_, { code }, context) => context.Category.loadByCode(code)
  }
};
