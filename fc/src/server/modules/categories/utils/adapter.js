const adaptCategory = category => ({
  name:
    (category.labels && category.labels.fr_FR) ||
    "Category name not translated in FR",
  url: category.code && `/category/${category.code}`,
  code: category.code
});

const adaptCategories = data => data.map(adaptCategory);

module.exports = {
  adaptCategories,
  adaptCategory
};
