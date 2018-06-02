export default {
  Query: {
    navigationMenu: (_, __, context) => context.Category.loadAll(),
    category: (_, { id }, context) => context.Category.loadById(id)
  }
};
