import React from "react";
import PropTypes from "prop-types";
import Description from "./Description";
import Actions from "./Actions";
import H1 from "../../ui/atoms/Typography/Heading/H1";
import "./ProductSynthesis.scss";

const ProductSynthesis = ({ product }) => (
  <div className="product-view">
    <div className="product-view__title">
      <H1>{product.name}</H1>
    </div>
    <Actions product={product} />
    <Description>{product.description}</Description>
  </div>
);

ProductSynthesis.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  })
};
export default ProductSynthesis;
