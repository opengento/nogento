const adaptProduct = product => ({
  sku: product.ean && product.ean.data,
  name: product.name && product.name.length && product.name[0].data,
  description:
    product.description &&
    product.description.length &&
    product.description[0].data
});

const adaptProducts = data =>
  data.map(product => product.values).map(adaptProduct);

const adaptCategory = category => ({
  name:
    (category.labels && category.labels.fr_FR) ||
    "Category name not translated in FR",
  url: category.code && `/category/${category.code}`,
  code: category.code
});

const adaptCategories = data => data.map(adaptCategory);

module.exports = {
  adaptProducts,
  adaptCategory,
  adaptCategories
};
