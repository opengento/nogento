const adaptProduct = product => ({
  sku: product.identifier,
  name: product.values.name && product.values.name.length && product.values.name[0].data,
  description:
    product.values.description &&
    product.values.description.length &&
    product.values.description[0].data,
  imageUrl:
    product.values.image &&
    product.values.image.length &&
    product.values.image[0]._links.download.href
});

const adaptProducts = data =>
  data.map(product => product).map(adaptProduct);

module.exports = {
  adaptProducts,
  adaptProduct
};
