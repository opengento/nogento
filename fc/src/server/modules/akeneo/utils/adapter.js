const adaptProduct = product => ({
  sku: product.ean && product.ean.data,
  name: product.name && product.name.length && product.name[0].data,
  description:
    product.description &&
    product.description.length &&
    product.description[0].data,
  imageUrl:
    product.image &&
    product.image.length &&
    product.image[0]._links.download.href
});

const adaptProducts = data =>
  data.map(product => product.values).map(adaptProduct);

module.exports = {
  adaptProducts
};
